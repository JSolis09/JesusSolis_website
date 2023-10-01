import { FC, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { GET_SKILLS } from "../../graphql/queries";
import { SkillsData } from "../../models";
import { parseSkills } from "../../utils";

import Container from "../../layouts/Container";
import ImageColumn from "../../layouts/ImageColumn";
import TwoColumns from "../../layouts/TwoColumns";
import MediaItem from "../../components/MediaItem";
import ProgressBar from "../../components/ProgressBar";
import TextStroke from "../../components/TextStroke";

const Skills: FC = () => {
    const { data, loading } = useQuery<SkillsData>(GET_SKILLS);
    const skills = useMemo(() => parseSkills(data?.skills.nodes), [data]);
    const skillList = skills?.map(({ id, value, title }) => <ProgressBar key={id} label={title} value={value} />);

    return (
        <div className="js-skills" id="my-skills">
            <Container>
                <TextStroke text="My Skills" h2Classname="js-about-me__info-text-stroke" />
                <TwoColumns leftColumnClassname="js-about-me__info">
                    <div className="js-skills__list">
                        {loading ? <span>Loading Skills...</span>: skillList}
                    </div>
                    <ImageColumn
                        imageComponent={<MediaItem title="skills" className="js-skills__img" />} />
                </TwoColumns>
            </Container>
        </div>
    );
};

export default Skills;
