import { FC, lazy, Suspense, useCallback, useState } from "react";
import MediaItem from "../../components/MediaItem";
import TextStroke from "../../components/TextStroke";
import TwoColumns from "../../layouts/TwoColumns";
import ImageColumn from "../../layouts/ImageColumn";

import './GetInTouch.scss';
import Container from "../../layouts/Container";

const GetInTouchForm = lazy(() => import('./GetInTouchForm'));

const GetInTouch: FC = () => {
    const [renderCaptcha, setRenderCaptcha] = useState(false);
    const handleMouseEnter = useCallback(() => {
        if (!renderCaptcha) {
            setRenderCaptcha(true);
        }
    }, [renderCaptcha]);
    return (
        <div className="js-getInTouch" onMouseEnter={handleMouseEnter} onTouchStart={handleMouseEnter} id="contact-me">
            <Container>
                <TextStroke text="Get in touch" h2Classname="js-about-me__info-text-stroke" />
                <TwoColumns rightColumnClassname="js-getInTouch__form-wrapper">
                    <ImageColumn imageComponent={<MediaItem title="contact-us" className="js-getInTouch__img" />} />
                    <Suspense fallback={null}>
                        <GetInTouchForm getCaptcha={renderCaptcha} />
                    </Suspense>
                </TwoColumns>
            </Container>
        </div>
    );
};

export default GetInTouch;
