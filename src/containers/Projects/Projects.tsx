import { useQuery } from "@apollo/client";
import { FC, lazy, Suspense, useMemo } from "react";
import TextStroke from "../../components/TextStroke";
import { GET_PROJECTS } from "../../graphql/queries";
import Container from "../../layouts/Container";
import { ProjectsData } from "../../models";
import { parseProjects } from "../../utils";
import './Projects.scss';

const Portfolio = lazy(() => import('../../components/Portfolio'));

const Projects: FC = () => {
    const { data, loading } = useQuery<ProjectsData>(GET_PROJECTS);
    const projects = useMemo(() => parseProjects(data?.projects.nodes), [data]);

    return (
        <div className="js-projects" id="projects">
            <Container>
                <TextStroke text="Relevant Projects" h2Classname="js-about-me__info-text-stroke" />
                {loading ? <span>Loading Projects...</span> : (
                    <Suspense>
                        <Portfolio list={projects} />
                    </Suspense>
                )}
            </Container>
        </div>
    );
};

export default Projects;
