import { FC, lazy, Suspense, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { GET_EXPERIENCE } from "../../graphql/queries";
import { WorkExperienceData } from "../../models";
import { parseWorkExperiences } from "../../utils";

import Container from "../../layouts/Container";
import ImageColumn from "../../layouts/ImageColumn";
import TwoColumns from "../../layouts/TwoColumns";
import MediaItem from "../../components/MediaItem";
import TextStroke from "../../components/TextStroke";

const Accordion = lazy(() => import('../../components/Accordion'));

const WorkExperience: FC = () => {
    const { data, loading } = useQuery<WorkExperienceData>(GET_EXPERIENCE);
    const items = useMemo(() => parseWorkExperiences(data?.workExperiences?.nodes), [data]);
    return (
        <div className="js-wexperience" id="my-experience">
            <Container>
                <TextStroke text="My Experience" />
                <TwoColumns>
                    <ImageColumn
                        imageComponent={<MediaItem title="experience" />}
                    />
                    {loading ? <span>Loading work experience...</span> : (
                        <Suspense fallback={<span>Loading work experience...</span>}>
                            <div className="js-wexperience__works">
                                <Accordion items={items} />
                            </div>
                        </Suspense>
                    )}
                </TwoColumns>
            </Container>
        </div>
    );
}

export default WorkExperience;
