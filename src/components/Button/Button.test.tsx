import { render, screen } from "@testing-library/react";
import Button from './Button';

test('renders Button correctly', async () => {
    render(<Button>My Custom Button</Button>);
    expect(await screen.findByText(/My Custom Button/i)).toBeInTheDocument();
});
