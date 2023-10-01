import { render, screen } from "@testing-library/react";
import TextStroke from './TextStroke';

test('renders TextStroke correctly', async () => {
    render(<TextStroke text="About Me" />);
    expect(await screen.findAllByText(/About Me/)).toHaveLength(2);
});
