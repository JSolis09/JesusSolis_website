import { render, screen } from "@testing-library/react";
import FormControl from './FormControl';

test('renders FormControl correctly', async () => {
    render(<FormControl inputProps={{ tag: 'input', placeholder: 'My Input' }} labelProps={{ children: <>Label</> }} />);
    expect(await screen.findByText(/Label/i)).toBeInTheDocument();
    expect(await screen.findByPlaceholderText(/My Input/i)).toBeInTheDocument();
});
