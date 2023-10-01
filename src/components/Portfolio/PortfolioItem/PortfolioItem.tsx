import { FC, memo } from "react";
import useAsyncBackground from "../../../hooks/useAsyncBackground";

import './PortfolioItem.scss';

interface PortfolioItemProps {
    cta: string;
    ctaTitle?: string;
    backgroundImage?: string;
    heading: string;
    subheading: string;
}

const PortfolioItem: FC<PortfolioItemProps> = ({ heading, subheading, backgroundImage, cta, ctaTitle }) => {
    const bgImage = useAsyncBackground(backgroundImage);
    return (
        <div className="js-portfolio-item">
            <a
                className="js-portfolio-item__card"
                href={cta}
                title={ctaTitle}
                target="_blank"
                rel="noreferrer"
                style={{
                    backgroundImage: bgImage ? `url(${bgImage})` : 'none',
                    backgroundPosition: 'top center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'max(369px, 100%) auto',
                }}
            >
                <div className="js-portfolio-item__box">
                    {heading && <p className="js-portfolio-item__box-heading">{heading}</p>}
                    {subheading && <p className="js-portfolio-item__box-subheading">{subheading}</p>}
                </div>
            </a>
        </div>
    );
};

export default memo(PortfolioItem);
