'use client';

/**
 * AccountProfile Component
 *
 * This component displays the user's profile picture if they are authenticated.
 * If the user does not have a profile picture, a default profile icon is shown.
 * Clicking on the profile picture or icon toggles the profile sidebar.
 *
 * Dependencies:
 * - React: Library for building user interfaces
 * - Firebase Auth: Authentication service from Firebase
 * - useProfileSidebarStore: Custom store for managing profile sidebar state
 * - CgProfile: Icon component from react-icons library
 *
 * Hooks:
 * - useEffect: Hook for performing side effects in functional components
 * - useState: Hook for managing local state in functional components
 */

import { auth } from '@/lib/firebaseConfig';
import { useProfileSidebarStore } from '@/store/useProfileSidebarStore';
import { onAuthStateChanged } from 'firebase/auth';
import { User } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const AccountProfile = () => {
    const [userPhoto, setUserPhoto] = useState<string>(''); // State for storing user photo URL
    const toggleProfileSidebar = useProfileSidebarStore(
        (state) => state.toggleProfileSidebar,
    ); // Function to toggle the profile sidebar from the store

    // useEffect hook to listen for authentication state changes
    useEffect(() => {
        // Subscribe to authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUserPhoto(user?.photoURL || ''); // Update the user photo state with the user's photo URL or an empty string
        });
        return unsubscribe; // Cleanup subscription on component unmount
    }, []);

    // Handle click event to toggle the profile sidebar
    const handleClick = () => {
        toggleProfileSidebar();
    };

    return (
        <>
            {userPhoto ? (
                // Display user photo if available
                <Image
                    src={userPhoto}
                    alt="Profile"
                    className="cursor-pointer rounded-full"
                    width={23}
                    height={23}
                    onClick={handleClick}
                />
            ) : (
                // Display default profile icon if user photo is not available
                <User
                    className="cursor-pointer"
                    onClick={handleClick}
                    size={24}
                />
            )}
        </>
    );
};

export default AccountProfile;
