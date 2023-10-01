import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import WorkExperience from './WorkExperience';
import React from "react";
import { GET_EXPERIENCE } from "../../graphql/queries";

const mocks = [
    {
        request: {
            query: GET_EXPERIENCE,
        },
        result: {
            data: {
                workExperiences: { nodes: [
                    {
                        id: '1',
                        title: 'Self Employed',
                        role: 'Frontend Developer',
                        description: 'Built my personal portfolio using React and Headless GraphQL Wordpress',
                        startDate: new Date(2023, 6, 1).getTime(),
                        endDate: null,
                        currentlyWorking: true,
                    },
                ]},
            },
        }
    },
];

jest.mock('../../layouts/ImageColumn', () => ({ imageComponent } : { imageComponent: React.ReactNode }) => <div>{imageComponent}</div>);
jest.mock('../../components/MediaItem', () => () => <img src="mock.png" alt="test mock" />);
jest.mock('../../components/Accordion', () => () => <div data-testid="accordion">Accordion Component</div>);


test('renders WorkExperience correctly', async () => {
    render(
        <MockedProvider mocks={mocks}>
            <WorkExperience />
        </MockedProvider>
    );
    expect(await screen.findByText(/Loading work experience.../i)).toBeInTheDocument();
    expect(await screen.findByAltText(/test mock/i)).toBeInTheDocument();
    expect(await screen.findByTestId("accordion")).toBeInTheDocument();
});
