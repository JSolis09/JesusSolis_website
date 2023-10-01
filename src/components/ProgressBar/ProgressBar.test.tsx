import { render, screen } from "@testing-library/react";
import ProgressBar from './ProgressBar';

test('renders ProgressBar correctly', async () => {
    render(<ProgressBar label="Javascript" value={100} />);
    expect(await screen.findByText(/Javascript/)).toBeInTheDocument();
    expect(await screen.findByText(/100%/)).toBeInTheDocument();
});

test('renders 0% if value is not provided', async () => {
    render(<ProgressBar label="Go" />);
    expect(await screen.findByText(/Go/)).toBeInTheDocument();
    expect(await screen.findByText(/0%/)).toBeInTheDocument();
});
