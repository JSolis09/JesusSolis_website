import { fireEvent, render, screen } from "@testing-library/react";
import React, { useEffect } from "react";
import { uiProject } from "../../models";
import Portfolio from './Portfolio';

interface MockSwiperProps {
    children: React.ReactNode,
    onSwiper: (swiper: any) => void,
}

const mockSwiper = {
    slideNext: jest.fn(),
    slidePrev: jest.fn(),
    update: jest.fn(),
};

function MockSwiper({ onSwiper, children }: MockSwiperProps) {
    useEffect(() => {
        onSwiper(mockSwiper);
    }, []);

    return <div data-testid="swiper">{children}</div>;
}

jest.mock('swiper/react', () => ({
    Swiper: MockSwiper,
    SwiperSlide: ({ children }: { children: React.ReactNode }) => <div data-testid="swiperSlide">{children}</div>
}));

test('renders Portfolio correctly', async () => {
    const list: uiProject[] = [
        {
            id: '1',
            description: 'Wordpress & React',
            featuredImage: {
                id: '1-1',
                src: 'image.png',
                alt: 'image alt',
            },
            title: 'My Website',
            url: 'wordpress.org'
        },
        {
            id: '2',
            description: 'Angular & Node',
            featuredImage: {
                id: '2-1',
                src: 'image2.png',
                alt: 'image2 alt',
            },
            title: 'Other App',
            url: 'example.dev'
        },
    ];
    render(<Portfolio list={list} />);
    expect(await screen.findByTestId("swiper")).toBeInTheDocument();
    expect(await screen.findAllByTestId("swiperSlide")).toHaveLength(2);
    const btnNext = await screen.findByLabelText('next');
    fireEvent.click(btnNext);
    expect(mockSwiper.slideNext).toHaveBeenCalled();
    const btnPrev = await screen.findByLabelText('previous');
    fireEvent.click(btnPrev);
    expect(mockSwiper.slidePrev).toHaveBeenCalled();
});

test('not reneders if no items', async () => {
    render(<Portfolio list={[]} />);
    expect(screen.queryByTestId("swiper")).not.toBeInTheDocument();
    expect(screen.queryAllByTestId("swiperSlide")).toHaveLength(0);
});
