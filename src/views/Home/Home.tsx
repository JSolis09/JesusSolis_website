import { FC, lazy, Suspense } from "react";
import AboutMe from '../../containers/AboutMe';
import { Profile } from "../../models";

const WorkExperience = lazy(() => import('../../containers/WorkExperience'));
const Skills = lazy(() => import('../../containers/Skills'));
const Projects = lazy(() => import('../../containers/Projects'));
const Metadata = lazy(() => import('../../components/Metadata'));
const GetInTouch = lazy(() => import('../../containers/GetInTouch'));

const Home: FC<{ profile?: Profile }> = ({ profile }) => (
    <>
        <AboutMe data={profile} />
        <Suspense fallback={null}>
            <WorkExperience />
        </Suspense>
        <Suspense fallback={null}>
            <Skills />
        </Suspense>
        <Suspense fallback={null}>
            <Projects />
        </Suspense>
        <Suspense fallback={null}>
            <GetInTouch />
        </Suspense>
         <Suspense fallback={null}>
            <Metadata />
        </Suspense>
    </>
);

export default Home;
