import Cart from '@/components/Cart/Cart';
import Features from '@/components/Features/Features';
import ExtendedHeader from '@/components/Header/ExtendedHeader';
import PopularProducts from '@/components/PopularProducts/PopularProducts';

const CartPage = () => {
    return (
        <>
            <ExtendedHeader customTitle="Cart" customSubtitle="Cart" />
            <Cart />
            <PopularProducts />
            <Features />
        </>
    );
};

export default CartPage;
