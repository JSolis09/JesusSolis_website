import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Swiper as ISwiper } from 'swiper/types';
import { Pagination, Navigation } from 'swiper';
import { uiProject } from '../../models';
import PortfolioItem from './PortfolioItem';

import './Portfolio.scss';

interface PortfolioProps {
    list: uiProject[];
}

const Portfolio: FC<PortfolioProps> = ({ list }) => {
    const [swiper, setSwiper] = useState<ISwiper | null>(null);

    useEffect(() => {
        if(swiper) {
            swiper.update();
        }
    }, [swiper])

    if (!list?.length) {
        return null;
    }

    const portfolioList = list.map(({ id, title, description, featuredImage, url }, index) => (
        <SwiperSlide key={id} virtualIndex={index}>
            <PortfolioItem
                heading={title}
                subheading={description}
                backgroundImage={featuredImage.src}
                cta={url}
                ctaTitle={title}
            />
        </SwiperSlide>
    ));

    const onSwiper = (swiper: ISwiper) => setSwiper(swiper);
    const slideNext = () => swiper?.slideNext();
    const slidePrev = () => swiper?.slidePrev();

    return (
        <div className="js-portfolio">
            <Swiper
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true, currentClass: 'js-swiper-bullets' }}
                onSwiper={onSwiper}
                slidesPerView={'auto'}
                spaceBetween={30}
                navigation={{
                    enabled: true,
                    nextEl: '.js-swiper-btn--next',
                    prevEl: '.js-swiper-btn--prev',        
                }}
                allowTouchMove
                className="js-portfolio__swiper"
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    1300: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    }
                }}
            >
                {portfolioList}
            </Swiper>
            <button aria-label="previous" className="js-swiper-btn js-swiper-btn--prev" onClick={slidePrev}>
                <i className="fa fa-chevron-left"></i>
            </button>
            <button aria-label="next" className="js-swiper-btn js-swiper-btn--next" onClick={slideNext}>
                <i className="fa fa-chevron-right"></i>
            </button>
        </div>
    );
};

export default Portfolio;
