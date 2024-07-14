'use client';

import { useProfileSidebarStore } from '@/store/useProfileSidebarStore';
import { User } from 'lucide-react';

const AccountProfile = () => {
    const toggleProfileSidebar = useProfileSidebarStore(
        (state) => state.toggleProfileSidebar,
    );

    return (
        <>
            <User
                className="cursor-pointer"
                onClick={toggleProfileSidebar}
                size={24}
            />
        </>
    );
};

export default AccountProfile;
