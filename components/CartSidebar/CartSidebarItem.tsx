'use client';

import { useCartStore } from '@/store/useCartStore';
import Image from 'next/image';
import React from 'react';
import { CircleX } from 'lucide-react';

const CartSidebarItem = () => {
    const { cart, removeFromCart } = useCartStore();

    return (
        <div className="max-h-[400px] flex-1 overflow-auto px-4">
            {cart.length === 0 ? (
                <p className="px-4 pt-8 text-center text-xl font-semibold">
                    Your cart is empty.
                </p>
            ) : (
                cart.map((item) => (
                    <React.Fragment key={item.id}>
                        <div className="mb-4 flex items-center gap-4">
                            <div className="w-[120px]">
                                <Image
                                    className="h-[110px] w-full rounded-xl object-cover"
                                    src={item.image}
                                    alt={item.title}
                                    width={120}
                                    height={110}
                                />
                            </div>
                            <div className="flex flex-1 flex-col items-center gap-1 sm:items-start">
                                <p className="text-base">{item.title}</p>
                                <div className="flex items-center gap-4">
                                    <p className="text-base font-light">
                                        {item.quantity}
                                    </p>
                                    <p className="text-xs">X</p>
                                    <p className="text-sm text-color-4">
                                        ${item.price}
                                    </p>
                                </div>
                            </div>
                            <div className="flex w-[40px] justify-center">
                                <CircleX
                                    onClick={() => removeFromCart(item.id)}
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>
                    </React.Fragment>
                ))
            )}
        </div>
    );
};

export default CartSidebarItem;
