'use client';

import { useCartStore } from '@/store/useCartStore';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../UI/Button';
import { Trash } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../UI/table';

const CartTable = () => {
    const { cart, removeFromCart, getTotalPrice } = useCartStore();

    return (
        <div className="flex flex-col items-center justify-center gap-8 sm:px-8 lg:flex-row lg:items-start lg:px-[50px]">
            <div className="w-full lg:w-[800px]">
                <Table className="min-w-full bg-white">
                    <TableHeader className="h-[55px] bg-color-2">
                        <TableRow>
                            <TableHead className="w-[40%] text-center text-sm font-medium sm:text-base">
                                Product
                            </TableHead>
                            <TableHead className="w-[15%] text-center text-sm font-medium sm:text-base">
                                Price
                            </TableHead>
                            <TableHead className="w-[15%] text-center text-sm font-medium sm:text-base">
                                Quantity
                            </TableHead>
                            <TableHead className="w-[15%] text-center text-sm font-medium sm:text-base">
                                Subtotal
                            </TableHead>
                            <TableHead className="w-[15%] "></TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {cart.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={5}
                                    className="px-4 py-2 text-center text-xl font-semibold"
                                >
                                    Your cart is empty
                                </TableCell>
                            </TableRow>
                        ) : (
                            cart.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="flex flex-col items-center gap-2 px-4 py-2 lg:flex-row lg:gap-6">
                                        <Image
                                            className="h-[80px] w-[80px] rounded-xl lg:h-[105px] lg:w-[105px]"
                                            src={item.image}
                                            alt={item.title}
                                            width={80}
                                            height={80}
                                        />
                                        <span className="text-center text-sm text-color-6 md:text-start lg:text-base">
                                            {item.title}
                                        </span>
                                    </TableCell>

                                    <TableCell className="text-center text-sm text-color-6 lg:text-base">
                                        ${item.price.toFixed(2)}
                                    </TableCell>

                                    <TableCell className="px-4 py-2 text-center">
                                        <span className="h-[32px] w-[32px] rounded-[5px] border border-color-6 px-2 py-1 text-center text-sm text-color-7 lg:px-3 lg:text-base">
                                            {item.quantity}
                                        </span>
                                    </TableCell>

                                    <TableCell className="px-4 py-2 text-center text-sm font-normal text-color-7 lg:text-base">
                                        $
                                        {(item.price * item.quantity).toFixed(
                                            2,
                                        )}
                                    </TableCell>

                                    <TableCell className="px-4 py-2 text-center">
                                        <div className="flex h-full items-center justify-center">
                                            <Trash
                                                onClick={() =>
                                                    removeFromCart(item.id)
                                                }
                                                className="cursor-pointer text-color-4"
                                            />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="flex h-auto w-full flex-col items-center bg-color-2 p-4 sm:w-[350px] lg:h-[330px]">
                <h3 className="mb-8 text-[2rem] font-semibold">Cart Totals</h3>
                <div className="mb-4 flex w-full justify-normal gap-20 text-base font-medium sm:justify-between">
                    <span className="text-color-7">Subtotal:</span>
                    <span className="text-color-6">
                        ${getTotalPrice().toFixed(2)}
                    </span>
                </div>
                <div className="mb-8 flex w-full justify-normal gap-20 text-base font-medium sm:justify-between">
                    <span className="text-color-7">Total:</span>
                    <span className="text-color-4">
                        ${getTotalPrice().toFixed(2)}
                    </span>
                </div>
                <Link href="/billing">
                    <Button
                        white
                        className="rounded-xl text-[1.25rem] font-normal capitalize"
                    >
                        Check Out
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default CartTable;
