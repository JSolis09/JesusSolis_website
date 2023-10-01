import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import GetInTouch from './GetInTouch';
import React from "react";

jest.mock('../../layouts/ImageColumn', () => ({ imageComponent } : { imageComponent: React.ReactNode }) => <div>{imageComponent}</div>);
jest.mock('../../components/MediaItem', () => () => <img src="mock.png" alt="test mock" />);
jest.mock('./GetInTouchForm', () => ({ getCaptcha }: { getCaptcha: boolean }) => <div data-testid="form">{getCaptcha ? 'with captcha' : 'no captcha'}</div>);


test('renders Skills correctly', async () => {
    render(<GetInTouch />);
    await waitFor(async () => {
        expect(await screen.findByText(/no captcha/i)).toBeInTheDocument();
    });
    expect(await screen.findByAltText(/test mock/i)).toBeInTheDocument();
    const form = await screen.findByTestId("form");
    expect(form).toBeInTheDocument();
    fireEvent.mouseEnter(form);
    expect(await screen.findByText(/with captcha/i)).toBeInTheDocument();
    fireEvent.mouseEnter(form);
    expect(await screen.findByText(/with captcha/i)).toBeInTheDocument();
});
