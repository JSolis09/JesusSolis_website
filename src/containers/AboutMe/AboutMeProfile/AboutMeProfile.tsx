import { FC } from "react";
import TextStroke from "../../../components/TextStroke";
import { Profile, SocialMedia } from "../../../models";
import './AboutMeProfile.scss';

const Avatar: FC<{ avatar: string }> = ({ avatar }) => (
    <div className="js-about-me__avatar">
        <img
            className="js-about-me__avatar-img"
            src={avatar}
            alt={`avatar`}
            width={100}
            height={100}
            loading="lazy"
        />
    </div>
);

const SocialMediaList: FC<{ socialMedia: SocialMedia[], fullname: string, role: string }> = ({ socialMedia, fullname, role }) => {
    const socialMediaList = socialMedia?.map(({ url, icon, name }) => (
        <a
            key={name}
            className="js-about-me__user-social-media"
            href={url}
            title={name}
        >
            <img
                className="js-about-me__user-social-media-img"
                alt={name}
                src={icon}
                width={50}
                height={50}
                loading="lazy"
            />
        </a>
    ));
    return (
        <div className="js-about-me__user">
            <span className="js-about-me__user-fullname">{fullname}</span>
            <span className="js-about-me__user-role">{role}</span>
            <div className="js-row">
                {socialMediaList}
            </div>
        </div>
    );
}

export default function AboutMeProfile({ summary, avatar, fullname, role, social_media }: Profile) {
    return (
        <>
            <TextStroke text="About me" h2Classname="js-about-me__info-text-stroke" />
            <p className="js-about-me__summary">{summary}</p>
            <div className="js-row">
                <Avatar avatar={avatar} />
                <SocialMediaList socialMedia={social_media} role={role} fullname={fullname} />
            </div>
        </>
    );
}
