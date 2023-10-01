import { render, screen } from "@testing-library/react";
import MediaItem from './MediaItem';

test('renders MediaItem correctly', async () => {
    render(<MediaItem alt="image test" src="/image.png" />);
    expect(await screen.findByAltText(/image test/)).toBeInTheDocument();
});

test('renders MediaItem with custom classname', async () => {
    render(<MediaItem alt="image test" src="/image.png" className="custom_image" />);
    expect(await screen.findByAltText(/image test/)).toHaveClass('custom_image');
});
