'use client';

/**
 * SidebarOverlay Component
 *
 * This component renders an overlay when either the cart sidebar or the profile sidebar is open.
 * The overlay is a semi-transparent background that covers the entire screen.
 *
 */

import { useCartSidebarStore } from '@/store/useCartSidebarStore';
import { useProfileSidebarStore } from '@/store/useProfileSidebarStore';

const SidebarOverlay = () => {
    const { openCart } = useCartSidebarStore();
    const { openProfile } = useProfileSidebarStore();

    return (
        <>
            {openCart && (
                <div className="fixed inset-0 z-40 bg-color-7/40"></div>
            )}
            {openProfile && (
                <div className="fixed inset-0 z-40 bg-color-7/40"></div>
            )}
        </>
    );
};

export default SidebarOverlay;
