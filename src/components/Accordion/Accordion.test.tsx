import { render, screen, fireEvent } from "@testing-library/react";
import { uiWorkExperience } from "../../models";
import Accordion from './Accordion';

const items: uiWorkExperience[] = [
    {
        id: '1',
        title: 'JS Lab',
        role: 'Senior Frontend Developer',
        description: 'React, Jest, HTML && Wordpress',
        startDate: new Date(2023, 8, 2, 0).getTime(),
        currentlyWorking: true,
    },
    {
        id: '2',
        title: 'JS SF',
        role: 'GraphQL Dev',
        description: 'GraphQL, Query && Mutation',
        startDate: new Date(2023, 7, 1, 0).getTime(),
        endDate: new Date(2023, 8, 1, 0).getTime(),
        currentlyWorking: false,
    }
];

test('renders Accordion correctly', async () => {
    render(<Accordion items={items} />);
    expect(await screen.findByText(/JS Lab/i)).toBeInTheDocument();
    expect(await screen.findByText(/Senior Frontend Developer/i)).toBeInTheDocument();
    expect(await screen.findByText(/React, Jest, HTML && Wordpress/i)).toBeInTheDocument();
    expect(await screen.findByText(/Sep 2023 - Present/i)).toBeInTheDocument();

    expect(await screen.findByText(/JS SF/i)).toBeInTheDocument();
    expect(await screen.findByText(/GraphQL Dev/i)).toBeInTheDocument();
    expect(await screen.findByText(/GraphQL, Query && Mutation/i)).toBeInTheDocument();
    expect(await screen.findByText(/Aug 2023 - Sep 2023/i)).toBeInTheDocument();
});

test('toggle accordion', async () => {
    render(<Accordion items={[items[0]]} />);
    const btn = await screen.findByLabelText('expand');
    fireEvent.click(btn);
    expect(await screen.findByLabelText('collapse')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(await screen.findByLabelText('expand')).toBeInTheDocument();
});
