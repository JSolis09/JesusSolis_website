import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Skills from './Skills';
import React from "react";
import { GET_SKILLS } from "../../graphql/queries";

const mocks = [
    {
        request: {
            query: GET_SKILLS,
        },
        result: {
            data: {
                skills: { nodes: [
                    {
                        id: '1',
                        title: 'Jest',
                        value: 100,
                    },
                    {
                        id: '2',
                        title: 'React',
                        value: 100,
                    },
                ]},
            },
        }
    },
];

jest.mock('../../layouts/ImageColumn', () => ({ imageComponent } : { imageComponent: React.ReactNode }) => <div>{imageComponent}</div>);
jest.mock('../../components/MediaItem', () => () => <img src="mock.png" alt="test mock" />);
jest.mock('../../components/ProgressBar', () => () => <div data-testid="pbar">ProgressBar Component</div>);


test('renders Skills correctly', async () => {
    render(
        <MockedProvider mocks={mocks}>
            <Skills />
        </MockedProvider>
    );
    expect(await screen.findByText(/Loading Skills.../i)).toBeInTheDocument();
    expect(await screen.findByAltText(/test mock/i)).toBeInTheDocument();
    expect(await screen.findAllByTestId("pbar")).toHaveLength(2);
});
