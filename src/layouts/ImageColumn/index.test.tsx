import { render, screen } from "@testing-library/react";
import ImageColumnWrapper from './';

jest.mock('./ImageColumn', () => ()=> <div>Image Column Component</div>)

test('renders MediaItem correctly', async () => {
    render(<ImageColumnWrapper />);
    expect(await screen.findByText(/Image Column Component/i)).toBeInTheDocument();
});
