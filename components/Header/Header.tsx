'use client';

import AccountProfile from './AccountProfile';
import CartIcon from './CartIcon';
import Logo from './Logo';
import MenuIcon from './MenuIcon';
import NavbarLinks from './NavbarLinks';
import SidebarOverlay from '../SidebarOverlay/SidebarOverlay';
import { useNavigationStore } from '@/store/useNavigationStore';

const Header = () => {
    const openNavigation = useNavigationStore();

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full ${
                openNavigation ? 'bg-color-1' : 'bg-color-1/90 backdrop-blur-md'
            }`}
        >
            <div className="flex items-center justify-between px-[1rem] py-[0.875rem] md:px-[4rem] md:py-[1.25rem]">
                <Logo />
                <NavbarLinks />

                <div className="flex items-center justify-center gap-4">
                    <div className="relative flex items-center justify-between gap-4">
                        <CartIcon />
                        <AccountProfile />
                    </div>
                    <MenuIcon />
                </div>
                <SidebarOverlay />
            </div>
        </header>
    );
};

export default Header;
