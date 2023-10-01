import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import MediaItem from './';
import mediaItems from "../../__test__/mediaItems.mock";

test('renders MediaItem correctly', async () => {
    const mocks = [
        mediaItems('test')
    ];
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <MediaItem title="test" />
        </MockedProvider>
    );
    expect(await screen.findByRole("spinbutton")).toBeInTheDocument();
    expect(await screen.findByAltText(/test/i)).toBeInTheDocument();
});

test('renders null if there is no data', async () => {
    const mocks = [
        mediaItems('not-found')
    ];
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <MediaItem title="not-found" />
        </MockedProvider>
    );
    expect(await screen.findByRole("spinbutton")).toBeInTheDocument();
    await waitFor(async () => {
        expect(screen.queryByRole("spinbutton")).not.toBeInTheDocument();
    });
    expect(screen.queryByAltText(/not-found/i)).not.toBeInTheDocument();
});