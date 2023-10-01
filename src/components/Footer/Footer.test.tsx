import { render, screen } from "@testing-library/react";
import Footer from './Footer';

test('renders Footer correctly', async () => {
    render(<Footer />);
    expect(await screen.findByAltText(/Jesus Solis Logo/i)).toBeInTheDocument();
    expect(await screen.findByText(/All Rights Reserved./i)).toBeInTheDocument();
});
