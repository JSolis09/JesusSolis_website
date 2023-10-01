import { render, screen } from "@testing-library/react";
import ImageColumn from './ImageColumn';

test('renders ImageColumn correctly', async () => {
    render(<ImageColumn imgSrc="image.png" imgAlt="My Image" imgCaption="Image Caption" />);
    expect(await screen.findByAltText(/My Image/i)).toBeInTheDocument();
    expect(await screen.findByText(/Image Caption/i)).toBeInTheDocument();
});

test('renders ImageColumn correctly with custom component', async () => {
    render(<ImageColumn imageComponent={<img alt="Custom png" src="image.png" />} />);
    expect(await screen.findByAltText(/Custom png/i)).toBeInTheDocument();
});
