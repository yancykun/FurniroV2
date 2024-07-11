'use client';

import { useCartSidebarStore } from '@/store/useCartSidebarStore';
import { SquareX } from 'lucide-react';

const CartSidebarHeader = () => {
    const { toggleCartSidebar } = useCartSidebarStore();

    return (
        <div className="m-6 flex justify-between border-b border-color-6/30 pb-6">
            <h2 className="text-base font-semibold md:text-xl lg:text-2xl">
                Shopping Cart
            </h2>
            <SquareX onClick={toggleCartSidebar} className="cursor-pointer" />
        </div>
    );
};

export default CartSidebarHeader;
