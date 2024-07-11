"use client";

import Button from "@/components/UI/Button";
import { useCartSidebarStore } from "@/store/useCartSidebarStore";
import Link from "next/link";

const CartSidebarButtons = () => {
  const { closeCartSidebar } = useCartSidebarStore();

  return (
    <div className="flex flex-wrap justify-center gap-2 px-2 py-4">
      <Link href="/cart">
        <Button
          onClick={closeCartSidebar}
          white
          className="h-[30px] w-[120px] rounded-[50px] text-xs font-normal capitalize"
        >
          Cart
        </Button>
      </Link>

      <Link href="/billing">
        <Button
          onClick={closeCartSidebar}
          white
          className="h-[30px] w-[120px] rounded-[50px] text-xs font-normal capitalize"
        >
          Checkout
        </Button>
      </Link>

      <Link href="/order">
        <Button
          onClick={closeCartSidebar}
          white
          className="h-[30px] w-[120px] rounded-[50px] text-xs font-normal capitalize"
        >
          Order
        </Button>
      </Link>
    </div>
  );
};

export default CartSidebarButtons;
