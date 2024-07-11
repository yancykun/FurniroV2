import Features from '@/components/Features/Features';
import Section from '@/components/Layout/Section';
import PopularProducts from '@/components/PopularProducts/PopularProducts';
import SingleProductCard from '@/components/Product/SingleProductCard';

const page = () => {
    return (
        <Section customMargin="mt-[80px]">
            <SingleProductCard />
            <PopularProducts />
            <Features />
        </Section>
    );
};

export default page;
