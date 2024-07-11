import { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SidebarOverlay from '../SidebarOverlay/SidebarOverlay';
import CartSidebarComponent from '../CartSidebar/CartSidebarComponent';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <SidebarOverlay />
            <CartSidebarComponent />
        </>
    );
};

export default Layout;
