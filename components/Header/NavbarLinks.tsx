'use client';

import { useNavigationStore } from '../../store/useNavigationStore';
import { navigationLinks } from '../../constants/index';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const NavbarLinks = () => {
    const { openNavigation, closeNavigation } = useNavigationStore();

    const pathname = usePathname();

    useEffect(() => {
        console.log('Current pathname:', pathname);
    }, [pathname]);

    return (
        <nav
            className={`${
                openNavigation ? 'flex bg-color-1' : 'hidden'
            } fixed bottom-0 left-0 right-0 top-[5rem] lg:static lg:mx-auto lg:flex`}
        >
            <div className="z-2 relative m-auto flex flex-col items-center justify-center gap-8 lg:flex-row">
                {navigationLinks.map((item) => (
                    <Link
                        href={item.url}
                        key={item.id}
                        onClick={closeNavigation}
                        className={`relative block text-lg font-semibold text-color-7 transition-colors hover:text-color-4 ${item.url === pathname ? 'z-2 lg:text-color-4' : ''}`}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default NavbarLinks;
