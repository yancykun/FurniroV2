'use client';

import { useEffect, useState } from 'react';
import { auth } from '@/lib/firebaseConfig';
import { fetchUserOrders } from '@/services/orderService';
import { useQuery } from '@tanstack/react-query';

const useUserOrders = () => {
    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    return useQuery({
        queryKey: ['orders', user?.uid],
        queryFn: () => fetchUserOrders(),
        enabled: !!user,
    });
};

export default useUserOrders;
