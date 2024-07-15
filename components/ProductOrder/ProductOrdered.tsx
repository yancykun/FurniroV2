'use client';

import useUserOrders from '@/hooks/useUserOrder';
import { CartItem, Order } from '@/types';
import Image from 'next/image';
import Section from '../Layout/Section';
import OrderedProductsLoading from './OrderedProductsLoading';

const ProductOrdered = () => {
    const { data: orders = [], isLoading } = useUserOrders();

    if (isLoading) {
        return (
            <Section>
                <h2 className="font-poppins mb-4 text-2xl font-semibold">
                    Items Ordered
                </h2>
                <OrderedProductsLoading />
            </Section>
        );
    }

    return (
        <div className="w-full sm:w-[300px]">
            {orders.length > 0 ? (
                <>
                    <h2 className="mb-4 text-2xl font-semibold">
                        Items Ordered
                    </h2>
                    {orders.map((order: Order) => (
                        <div className="mb-8 grid" key={order.id}>
                            <h3 className="font-semibold">
                                Order ID:{' '}
                                <span className="text-sm font-light">
                                    {order.id}
                                </span>
                            </h3>
                            <div className="grid gap-4 border-b border-color-4 p-4">
                                {order.cart.map((item: CartItem) => (
                                    <div
                                        className="flex items-center gap-4"
                                        key={item.id}
                                    >
                                        <Image
                                            className="h-[100px] w-[140px] rounded-md object-cover"
                                            src={item.image}
                                            alt={item.title}
                                            width={140}
                                            height={100}
                                        />
                                        <div className="flex flex-1 flex-col gap-1">
                                            <p className="text-base">
                                                {item.title}
                                            </p>
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
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <p className="p-2 text-2xl font-bold">No orders found!</p>
            )}
        </div>
    );
};

export default ProductOrdered;
