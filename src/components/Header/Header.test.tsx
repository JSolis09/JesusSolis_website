import { fireEvent, render, screen } from "@testing-library/react";
import Header from './Header';

test('renders Header correctly', async () => {
    const props = {
        logoProps: { alt: 'image' },
        menuItems: [
            {
                id: '1',
                label: 'About me',
                url: '#about-me'
            },
        ],
        logoCta: "/home",
    };
    render(<Header {...props} />);
    expect(await screen.findByAltText(/image/i)).toBeInTheDocument();
    expect(await screen.findAllByText(/About me/i)).toHaveLength(2);
});

test('toggles mobile menu', async () => {
    const props = {
        logoProps: { alt: 'image' },
        menuItems: [
            {
                id: '1',
                label: 'About me',
                url: '#about-me'
            },
        ],
        logoCta: "/home",
    };
    render(<Header {...props} />);
    const btn = await screen.findByLabelText("menu");
    fireEvent.click(btn);
    expect(await screen.findByLabelText(/menu mobile open/i)).toBeInTheDocument();
    const closeBtn = await screen.findByLabelText("button close");
    fireEvent.click(closeBtn);
    expect(await screen.findByLabelText(/menu mobile close/i)).toBeInTheDocument();
});

test('does not render MenuListItem if menuItems is []', async() => {
    render(<Header />);
    expect(await screen.findByAltText('default')).toBeInTheDocument();
    expect(await screen.findByRole('link')).toHaveAttribute('href', '/');
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.querySelector('.js-header__nav-menu')?.children.length).toBe(0);
});