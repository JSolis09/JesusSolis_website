import { render, screen } from "@testing-library/react";
import { Profile } from "../../models";
import AboutMe from './AboutMe';
import React from "react";

jest.mock('../../layouts/ImageColumn', () => ({ imageComponent } : { imageComponent: React.ReactNode }) => <div>{imageComponent}</div>);
jest.mock('../../components/MediaItem', () => () => <img src="mock.png" alt="test mock" />);
jest.mock('./AboutMeProfile', () => () => <div>AboutMe Component</div>);


test('renders AboutMe correctly', async () => {
    const props: Profile = {} as Profile;
    render(<AboutMe data={props} />);
    expect(await screen.findByText(/AboutMe Component/i)).toBeInTheDocument();
    expect(await screen.findByAltText(/test mock/i)).toBeInTheDocument();
});

test('renders error message if data is null', async () => {
    render(<AboutMe />);
    expect(await screen.findByText(/Error fetching profile.../i)).toBeInTheDocument();
});
