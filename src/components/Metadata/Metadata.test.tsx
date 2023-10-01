import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Metadata from './';
import { GET_SETTINGS } from "../../graphql/queries";
import { GetSettingsData } from "../../models";

jest.mock('react-helmet-async', () => ({
    HelmetProvider: (props: { children: React.ReactNode }) => <div>{props.children}</div>,
    Helmet: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

const mocks = [
    {
        request: {
            query: GET_SETTINGS,
        },
        result: {
            data: {
                allSettings: {
                    generalSettingsUrl: '/',
                    generalSettingsTitle: 'Website Title',
                    generalSettingsDescription: 'Website Description',
                },
            } as GetSettingsData
        },
    }
];

test('renders Metadata correctly', async () => {
    render(
        <MockedProvider mocks={mocks}>
            <Metadata />
        </MockedProvider>
    );
    expect(screen.queryByText(/Website Title/i)).not.toBeInTheDocument();
    expect(await screen.findByText(/Website Title/i)).toBeInTheDocument();
    jest.unmock('react-helmet-async');
});
