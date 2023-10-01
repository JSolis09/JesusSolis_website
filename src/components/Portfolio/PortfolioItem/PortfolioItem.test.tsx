import { fireEvent, render, screen } from "@testing-library/react";
import PortfolioItem from './PortfolioItem';

jest.mock('../../../hooks/useAsyncBackground', () => (bg: string) => bg);

const mockProps = (override: any = {}) => ({
    cta: 'jesussolis.me',
    ctaTitle: 'my website',
    backgroundImage: 'image.png',
    heading: 'My Portfolio',
    subheading: 'Wordpress & React',
    ...override,
})

test('renders PortfolioItem correctly', async () => {
    render(<PortfolioItem {...mockProps()} />);
    expect(await screen.findByText(/Wordpress & React/i)).toBeInTheDocument();
    expect(await screen.findByText(/My Portfolio/i)).toBeInTheDocument();
    expect(await screen.findByRole("link")).toHaveStyle({ 'backgroundImage': 'url(image.png)' });
});

test('renders PortfolioItem without backgroundImage', async () => {
    render(<PortfolioItem {...mockProps({ backgroundImage: null })} />);
    expect(await screen.findByText(/Wordpress & React/i)).toBeInTheDocument();
    expect(await screen.findByText(/My Portfolio/i)).toBeInTheDocument();
    expect(await screen.findByRole("link")).toHaveStyle({ 'backgroundImage': 'none' });
});
