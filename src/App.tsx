import './app.css';
import Layout from './layouts/Base';
import useInitialData from './hooks/useInitialData';
import Loader from './components/Loader';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./views/Home'));

export default function App() {
    const { menu, logo, profile, loading } = useInitialData();

    if (loading) {
        return <Loader />
    }

    return (
        <Layout menu={menu} logo={logo}>
            <Suspense fallback={<Loader />}>
                <Home profile={profile} />
            </Suspense>
        </Layout>
    );
}
