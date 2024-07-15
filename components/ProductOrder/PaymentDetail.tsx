'use client';

import Link from 'next/link';
import Button from '../UI/Button';
import useUserOrders from '@/hooks/useUserOrder';
import Section from '../Layout/Section';
import PaymentDetailsLoading from './PaymentDetailsLoading';

const PaymentDetail = () => {
    const { data: orders = [], isLoading } = useUserOrders();

    if (isLoading) {
        return (
            <Section>
                <h2 className="font-poppins mb-4 text-2xl font-semibold">
                    Payment Details
                </h2>
                <PaymentDetailsLoading />
            </Section>
        );
    }

    const getTotalPrice = () => {
        return orders.reduce((total, order) => {
            const orderTotal = order.cart.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0,
            );
            return total + orderTotal;
        }, 0);
    };

    return (
        <div className="w-full sm:w-[300px]">
            {orders.length > 0 ? (
                <>
                    <h2 className="font-poppins mb-4 text-2xl font-semibold">
                        Payment Details
                    </h2>
                    {orders.map((order) => (
                        <div className="" key={order.id}>
                            {order.cart.map((item) => (
                                <div
                                    className="flex items-center justify-between bg-color-2 px-5 py-2"
                                    key={item.id}
                                >
                                    <p className="font-poppins text-base">
                                        {item.title}
                                    </p>
                                    <p className="font-poppins text-sm text-color-4">
                                        ${item.price}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                    <div className="mt-3 flex items-center justify-between border-t border-color-6/40 pt-4">
                        <p className="font-poppins text-[1.25rem] font-medium">
                            Total
                        </p>
                        <p className="font-poppins text-[1.25rem] font-medium text-color-4">
                            ${getTotalPrice().toFixed(2)}
                        </p>
                    </div>
                </>
            ) : (
                <Link href={'/shop'}>
                    <Button>Shop now!</Button>
                </Link>
            )}
        </div>
    );
};

export default PaymentDetail;
