'use client';

import { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCartSidebarStore } from '@/store/useCartSidebarStore';
import { useCartStore } from '@/store/useCartStore';

const CartIcon = () => {
    const { toggleCartSidebar } = useCartSidebarStore();
    const { itemCount } = useCartStore();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="relative">
            <ShoppingCart
                className="relative cursor-pointer"
                onClick={toggleCartSidebar}
                size={24}
            />

            {isMounted && itemCount > 0 && (
                <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                    {itemCount}
                </div>
            )}
        </div>
    );
};

export default CartIcon;
