import { FC } from "react";
import { Profile } from "../../models";
import Container from "../../layouts/Container";
import ImageColumn from "../../layouts/ImageColumn";
import TwoColumns from "../../layouts/TwoColumns";
import AboutMeProfile from "./AboutMeProfile";
import MediaItem from "../../components/MediaItem";
import './AboutMe.scss';

const AboutMe: FC<{ data?: Profile }> = ({ data }) => {
    return (
        <div className="js-about-me" id="about-me">
            <Container className="js-about-me__container">
                <TwoColumns leftColumnClassname="js-about-me__info">
                    { data ? <AboutMeProfile {...data } /> : <span>Error fetching profile...</span> }
                    <ImageColumn imageComponent={<MediaItem title="about-me" className="js-about-me__img" />} />
                </TwoColumns>
            </Container>
        </div>
    );
};

export default AboutMe;
