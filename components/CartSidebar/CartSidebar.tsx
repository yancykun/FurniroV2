import CartSidebarButtons from './CartSidebarButtons';
import CartSidebarHeader from './CartSidebarHeader';
import CartSidebarItem from './CartSidebarItem';
import CartSidebarTotal from './CartSidebarTotal';

const CartSidebar = () => {
    return (
        <div className="relative flex h-full flex-col bg-color-1 shadow-lg">
            <CartSidebarHeader />
            <CartSidebarItem />
            <CartSidebarTotal />
            <CartSidebarButtons />
        </div>
    );
};

export default CartSidebar;
