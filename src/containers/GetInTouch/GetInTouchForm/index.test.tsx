import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import GetInTouchFormContainer from './';
import React from "react";
import { GET_CAPTCHA_KEY } from "../../../graphql/queries";

const mocks = [
    {
        request: {
            query: GET_CAPTCHA_KEY,
        },
        result: {
            data: {
                getCaptchaSiteKey: 'token',
            },
        }
    },
];

jest.mock('react-google-recaptcha-v3', () => ({
    GoogleReCaptchaProvider: ({ children } : { children: React.ReactNode }) => <div data-testid="GoogleReCaptchaProvider">{children}</div>,
}));
jest.mock('./GetInTouchForm', () => () => <div data-testid="form">GetInTouchForm</div>);

test('renders GetInTouchFormContainer without captcha', async () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <GetInTouchFormContainer getCaptcha={false} />
        </MockedProvider>
    );
    expect(screen.queryByTestId("GoogleReCaptchaProvider")).not.toBeInTheDocument();
    expect(await screen.findByTestId("form")).toBeInTheDocument();
});

test('renders GetInTouchFormContainer with captcha', async () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <GetInTouchFormContainer getCaptcha={true} />
        </MockedProvider>
    );
    expect(await screen.findByTestId("GoogleReCaptchaProvider")).toBeInTheDocument();
    expect(await screen.findByTestId("form")).toBeInTheDocument();
});
