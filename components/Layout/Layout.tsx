import { ReactNode, Suspense } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SidebarOverlay from '../SidebarOverlay/SidebarOverlay';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <SidebarOverlay />
        </>
    );
};

export default Layout;
