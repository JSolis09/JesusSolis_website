import { render, screen } from "@testing-library/react";
import Projects from './Projects';

import { MockedProvider } from "@apollo/client/testing";
import { GET_PROJECTS } from "../../graphql/queries";
import { ProjectsData } from "../../models";

jest.mock('../../components/Portfolio', () => () => <div>Portfolio Component</div>);

const mocks = [
    {
        request: {
            query: GET_PROJECTS,
        },
        result: {
            data: {
                projects: { nodes: [
                    {
                        id: '1',
                        title: 'mock project',
                        description: 'mock description',
                        url: '/url',
                        startDate: '2023-09-01',
                        icon: 'icon.png',
                        featuredImage: {
                            node: {
                                id: '1',
                                altText: 'mock',
                                sourceUrl: 'image.png'
                            },
                        },
                    }
                ]},
            } as ProjectsData
        }
    },
];

test('renders Projects correctly', async () => {
    render(
        <MockedProvider mocks={mocks}>
            <Projects />
        </MockedProvider>
    );
    expect(await screen.findByText(/Loading Projects.../i)).toBeInTheDocument();
    expect(await screen.findByText(/Portfolio Component/i)).toBeInTheDocument();
});
