import { fireEvent, render, screen } from "@testing-library/react";
import DarkModeSwitch from './DarkModeSwitch';

test('renders DarkModeSwitch correctly', async () => {
    render(<DarkModeSwitch />);
    expect(await screen.findByLabelText(/dark mode switch/i)).toBeInTheDocument();
});

test('toggles theme correctly', async () => {
    render(<DarkModeSwitch />);
    const switcher = await screen.findByLabelText(/dark mode switch/i);
    fireEvent.click(switcher);
    expect(document.body.getAttribute('data-theme')).toEqual('dark');
    fireEvent.click(switcher);
    expect(document.body.getAttribute('data-theme')).toEqual('light');
});
