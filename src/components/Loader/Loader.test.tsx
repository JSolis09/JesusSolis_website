import { render, screen } from "@testing-library/react";
import Loader from './Loader';

test('renders Loader correctly', async () => {
    render(<Loader />);
    expect(await screen.findByRole("spinbutton")).toBeInTheDocument();
});
