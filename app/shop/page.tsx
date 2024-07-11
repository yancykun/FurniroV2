'use client';

import Features from '@/components/Features/Features';
import ExtendedHeader from '@/components/Header/ExtendedHeader';
import Section from '@/components/Layout/Section';
import ProductList from '@/components/Product/ProductList';
import ProductSkeletonLoading from '@/components/UI/ProductSkeletonLoading';
import { useProducts } from '@/hooks/useProducts';

const Shop = () => {
    const { data: products = [], isLoading } = useProducts();

    if (isLoading) {
        return (
            <Section>
                <ExtendedHeader customTitle="Shop" customSubtitle="Shop" />
                <div className="mx-auto mb-5 grid w-fit grid-cols-1 justify-center justify-items-center gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
                    {[...Array(24)].map((_, index) => (
                        <ProductSkeletonLoading key={index} />
                    ))}
                </div>
            </Section>
        );
    }

    return (
        <Section id="shop">
            <ExtendedHeader customTitle="Shop" customSubtitle="Shop" />
            <ProductList products={products} />
            <Features />
        </Section>
    );
};

export default Shop;
