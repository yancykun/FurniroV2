'use client';

import { useProfileSidebarStore } from '@/store/useProfileSidebarStore';
import { X } from 'lucide-react';
import AccountSidebar from './AccountSidebar';

const ProfileSidebar = () => {
    const { closeProfileSidebar } = useProfileSidebarStore();
    return (
        <div className="relative flex h-full flex-col bg-color-1 shadow-lg">
            <div className="px-6 py-4">
                <div className="mb-4 flex justify-end border-b border-color-6/30 pb-4">
                    <X
                        className="cursor-pointer"
                        size={25}
                        onClick={closeProfileSidebar}
                    />
                </div>

                <AccountSidebar />
            </div>
        </div>
    );
};

export default ProfileSidebar;
