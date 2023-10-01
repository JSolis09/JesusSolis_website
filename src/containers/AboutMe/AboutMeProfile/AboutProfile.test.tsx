import { render, screen } from "@testing-library/react";
import { Profile } from "../../../models";
import AboutMeProfile from './AboutMeProfile';

test('renders AboutMeProfile correctly', async () => {
    const props: Profile = {
        summary: 'Profficient Fronted Developer in React, HTML, CSS & Typescript',
        role: 'Fronted Engenieer',
        avatar: 'avatar.png',
        fullname: 'JS',
        social_media: [
            {
                icon: '📧',
                name: 'LinkedIn',
                url: 'linkedin/js123456',
            }
        ],
    } as Profile;
    render(<AboutMeProfile {...props} />);
    expect(await screen.findByText(/Profficient Fronted Developer in React, HTML, CSS & Typescript/i)).toBeInTheDocument();
    expect(await screen.findByAltText(/avatar/i)).toBeInTheDocument();
    expect(await screen.findByText(/JS/i)).toBeInTheDocument();
    expect(await screen.findByText(/Fronted Engenieer/i)).toBeInTheDocument();
    expect(await screen.findByAltText(/LinkedIn/i)).toBeInTheDocument();
});
