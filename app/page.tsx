import Category from '@/components/Category/Category';
import Hero from '@/components/Hero/Hero';
import Inspiration from '@/components/Inspiration/Inspiration';
import Products from '@/components/Product/Products';

const Home = () => {
    return (
        <>
            <Hero />
            <Category />
            <Products />
            <Inspiration />
        </>
    );
};

export default Home;
