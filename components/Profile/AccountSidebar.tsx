'use client';

import { useEffect, useState } from 'react';
import Button from '../UI/Button';
import { useProfileSidebarStore } from '../../store/useProfileSidebarStore';
import { auth } from '../../lib/firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User } from 'lucide-react';

const AccountSidebar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const closeProfileSidebar = useProfileSidebarStore(
        (state) => state.closeProfileSidebar,
    );
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
                setUserEmail(user.email || '');
                router.push('/');
            } else {
                setIsLoggedIn(false);
                setUserEmail('');
            }
        });

        return () => unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            closeProfileSidebar();
            router.push('/signin');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <>
            {isLoggedIn ? (
                <>
                    <div className="flex items-center gap-2 sm:gap-4">
                        <User className="cursor-pointer" size={35} />

                        <p className=" text-sm text-color-6 sm:text-base">
                            {userEmail}
                        </p>
                    </div>
                    <div className="mt-6 flex gap-4">
                        <Link href="/cart">
                            <Button
                                white
                                onClick={closeProfileSidebar}
                                className=" h-[30px] w-[120px] rounded-[50px] text-xs font-medium"
                            >
                                Cart
                            </Button>
                        </Link>

                        <Button
                            white
                            onClick={handleLogout}
                            className=" h-[30px] w-[120px] rounded-[50px] text-xs font-medium"
                        >
                            Logout
                        </Button>
                    </div>
                </>
            ) : (
                <div>
                    <p className=" text-xl font-semibold">
                        You are not logged in.
                    </p>
                    <div className="mt-6 flex items-center justify-start gap-4">
                        <Link href="/signin">
                            <Button
                                white
                                onClick={closeProfileSidebar}
                                className=" h-[30px] w-[120px] rounded-[50px] text-xs font-medium"
                            >
                                Sign in
                            </Button>
                        </Link>
                        <Link href="/signup">
                            <Button
                                white
                                onClick={closeProfileSidebar}
                                className=" h-[30px] w-[120px] rounded-[50px] text-xs font-medium"
                            >
                                Sign up
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default AccountSidebar;
