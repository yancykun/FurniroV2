'use client';

import { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SidebarOverlay from '../SidebarOverlay/SidebarOverlay';
import CartSidebarComponent from '../CartSidebar/CartSidebarComponent';
import { usePathname } from 'next/navigation';

const Layout = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const isAuthPage = pathname === '/signup' || pathname === '/signin';

    return (
        <>
            {isAuthPage ? (
                children
            ) : (
                <>
                    <Header />
                    {children}
                    <Footer />
                    <SidebarOverlay />
                    <CartSidebarComponent />
                </>
            )}
        </>
    );
};

export default Layout;
