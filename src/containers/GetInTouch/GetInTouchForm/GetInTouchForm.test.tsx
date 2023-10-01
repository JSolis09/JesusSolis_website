import { render, screen, fireEvent, act } from "@testing-library/react";
import * as apolloClient from "@apollo/client";
import { MockedProvider } from "@apollo/client/testing";
import { useEffect } from "react";
import { SEND_MESSAGE } from "../../../graphql/queries/sendEmail";
import GetInTouchForm from './GetInTouchForm';
import { GraphQLError } from "graphql";

jest.useFakeTimers();

const mockInput = {
    captcha: 'captcha_key_token',
    name: 'User Name',
    message: 'testing forms with captcha',
    email: 'me@example.test',
}

const mocks = [
    {
        request: {
            query: SEND_MESSAGE,
            variables: {
                input: {...mockInput},
            },
        },
        result: {
            data: {
                getInTouch: {
                    success: true,
                    error: null,
                },
            },
        },
        errors: [new GraphQLError("Error!")],
    },
];

interface GoogleCaptchaProps {
    onVerify: (str: string) => void;
    refreshReCaptcha: boolean;
}

jest.mock('react-google-recaptcha-v3', () => {
    return {
        GoogleReCaptcha: (props: GoogleCaptchaProps) => {
            return <MockGoogleReCaptcha {...props}/>;
        },
    };
});

function MockGoogleReCaptcha(props: GoogleCaptchaProps) {
    useEffect(() => {
        props.onVerify(mockInput.captcha);
    }, []);
    return <div data-testid="GoogleReCaptcha">Captcha</div>;
}

test('renders GetInTouchForm without captcha', () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <GetInTouchForm  showCaptcha={false} />
        </MockedProvider>
    );
    expect(screen.queryByTestId("GoogleReCaptcha")).not.toBeInTheDocument();
});

test('renders GetInTouchForm with captcha', async () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <GetInTouchForm showCaptcha={true} />
        </MockedProvider>
    );
    expect(await screen.findByTestId("GoogleReCaptcha")).toBeInTheDocument();
    const nameInput = await screen.findByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: mockInput.name } });
    const emailInput = await screen.findByLabelText(/Email/i);
    fireEvent.change(emailInput, { target: { value: mockInput.email } });
    const messageInput = await screen.findByLabelText(/Message/i);
    fireEvent.change(messageInput, { target: { value: mockInput.message } });
    const btn = await screen.findByTitle(/Submit Form/i);
    fireEvent.click(btn);
    expect(await screen.findByText(/Form successfully submitted/i)).toBeInTheDocument();
    act(() => {
        jest.advanceTimersByTime(4000);    
    });
    expect(screen.queryByText(/Form successfully submitted/i)).not.toBeInTheDocument();
});

test('renders error message', async () => {
    const errorMock = [
        {
            request: {
                query: SEND_MESSAGE,
                variables: {
                    input: {...mockInput},
                },
            },
            errors: [new GraphQLError("Error!")],
        }
    ];
    render(
        <MockedProvider mocks={errorMock} addTypename={false}>
            <GetInTouchForm showCaptcha={true} />
        </MockedProvider>
    );
    const btn = await screen.findByTitle(/Submit Form/i);
    fireEvent.click(btn);
    const fn = jest.spyOn(apolloClient, 'useMutation');
    expect(fn).not.toHaveBeenCalled();
    const nameInput = await screen.findByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: mockInput.name } });
    const emailInput = await screen.findByLabelText(/Email/i);
    fireEvent.change(emailInput, { target: { value: mockInput.email } });
    const messageInput = await screen.findByLabelText(/Message/i);
    fireEvent.change(messageInput, { target: { value: mockInput.message } });
    fireEvent.click(btn);
    expect(await screen.findByText(/Oops! Something went wrong/i)).toBeInTheDocument();
});

test('does not call sendMessage', async () => {
    const sendMessageSpy = jest.fn(({ onCompleted }) => {
        setTimeout(() => {
            onCompleted({ getInTouch: { success: false, error: '' } });
        }, 100);
    });
    jest.spyOn(apolloClient, 'useMutation').mockImplementation(() => [sendMessageSpy, { loading: false }] as any);
    render(
        <MockedProvider mocks={[]} addTypename={false}>
            <GetInTouchForm showCaptcha={true} />
        </MockedProvider>
    );
    const btn = await screen.findByTitle(/Submit Form/i);
    expect(btn).toBeDisabled();
    btn.removeAttribute('disabled');
    fireEvent.click(btn);
    expect(sendMessageSpy).not.toHaveBeenCalled();
    const nameInput = await screen.findByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: mockInput.name } });
    const emailInput = await screen.findByLabelText(/Email/i);
    fireEvent.change(emailInput, { target: { value: mockInput.email } });
    const messageInput = await screen.findByLabelText(/Message/i);
    fireEvent.change(messageInput, { target: { value: mockInput.message } });
    fireEvent.click(btn);
    expect(sendMessageSpy).toHaveBeenCalledTimes(1);
    expect(await screen.findByText(/Oops! Something went wrong/i)).toBeInTheDocument();
});
