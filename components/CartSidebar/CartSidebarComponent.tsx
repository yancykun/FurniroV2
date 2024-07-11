'use client';

import CartSidebar from './CartSidebar';
import { useCartSidebarStore } from '@/store/useCartSidebarStore';

const CartSidebarComponent = () => {
    const { openCart } = useCartSidebarStore();

    return (
        <>
            {openCart && (
                <div className="fixed right-0 top-0 z-50 h-[550px] w-[80%] sm:w-[417px]">
                    <CartSidebar />
                </div>
            )}
        </>
    );
};

export default CartSidebarComponent;
