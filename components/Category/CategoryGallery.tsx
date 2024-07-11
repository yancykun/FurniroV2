'use client';

import { useProducts } from '@/hooks/useProducts';
import ProductList from '../Product/ProductList';
import PopularProducts from '../PopularProducts/PopularProducts';
import { useParams } from 'next/navigation';

const CategoryGallery = () => {
    const { category } = useParams();
    const { data: products = [] } = useProducts();

    const filteredProducts = products.filter(
        (product) => product.category === category,
    );

    return (
        <>
            {category ? (
                <ProductList products={filteredProducts} />
            ) : (
                <PopularProducts />
            )}
        </>
    );
};

export default CategoryGallery;
