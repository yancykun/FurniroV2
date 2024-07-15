'use client';

import { useProducts } from '@/hooks/useProducts';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Section from '../Layout/Section';
import ProductSkeletonLoading from '../UI/ProductSkeletonLoading';
import ProductDetailsLoading from '../UI/ProductDetailsLoading';
import ProductDetails from './ProductDetails';
import ProductNotFound from '../UI/ProductNotFound';

const SingleProductCard = () => {
    const { productId } = useParams();
    const { data: products = [], isLoading } = useProducts();
    const product = products.find((product) => product.id === productId);

    if (isLoading) {
        return (
            <Section>
                <div className="flex w-full flex-col justify-center gap-10 px-[2rem] pt-[33px] md:flex-row md:gap-20 lg:px-[99px]">
                    <div className="flex w-full justify-center md:justify-end">
                        <ProductSkeletonLoading />
                    </div>
                    <ProductDetailsLoading />
                </div>
            </Section>
        );
    }

    if (!product) {
        return <ProductNotFound />;
    }

    return (
        <div className="flex w-full flex-col justify-center gap-10 px-[2rem] pt-[33px] md:flex-row md:gap-20 lg:px-[99px]">
            <div className="flex w-full justify-center md:justify-end">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={350}
                    className="h-[400px] w-[350px] rounded-xl"
                />
            </div>
            <ProductDetails product={product} />
        </div>
    );
};

export default SingleProductCard;
