import React, { FC, lazy, Suspense, useMemo } from "react";
import { MediaItemConnection, MenuConnection } from "../../models";
import { getMediaItem, parseMenuItems } from "../../utils";

const Header = lazy(() => import('../../components/Header'));
const Footer = lazy(() => import('../../components/Footer'));

interface BaseLayoutProps {
    menu?: MenuConnection;
    logo?: MediaItemConnection;
    children: React.ReactNode;
}

const Base: FC <BaseLayoutProps>= ({ children, menu, logo }) => {
    const items = useMemo(() => parseMenuItems(menu), [menu]);
    const logoData = useMemo(() => getMediaItem(logo?.nodes) || {}, [logo]);

    return (
        <>
            <Suspense fallback={null}>
                <Header
                    menuItems={items}
                    logoProps={{ ...logoData }}
                    logoCta="/"
                />
            </Suspense>
                <main>{children}</main>
            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </>
    );
};

export default Base;
