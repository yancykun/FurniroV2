'use client';

import { useProducts } from '@/hooks/useProducts';
import ProductList from '../Product/ProductList';
import ProductSkeletonLoading from '../UI/ProductSkeletonLoading';
import Section from '../Layout/Section';

const PopularProducts = () => {
    const { data: products = [], isLoading } = useProducts();

    if (isLoading) {
        return (
            <Section>
                <h2 className="h2 mb-10 text-center">Popular Products</h2>
                <div className="mx-auto mb-5 grid w-fit grid-cols-1 justify-center justify-items-center gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
                    {[...Array(10)].map((_, index) => (
                        <ProductSkeletonLoading key={index} />
                    ))}
                </div>
            </Section>
        );
    }

    const featuredProducts = products
        .filter((product) => product.featured)
        .sort((a, b) => b.popularity - a.popularity);

    return (
        <div className="grid">
            <h2 className="h2 mb-10 text-center">Popular Products</h2>
            <ProductList products={featuredProducts} />
        </div>
    );
};

export default PopularProducts;
