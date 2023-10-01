import { render, screen } from "@testing-library/react";
import MenuIcon from './MenuIcon';

test('renders MenuIcon correctly', async () => {
    render(<MenuIcon />);
    expect(await screen.findByLabelText(/menu/)).toBeInTheDocument();
});
