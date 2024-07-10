import { Product } from '@/types/productType';
import ProductCard from './ProductCard';

type ProductListProps = {
    products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
    return (
        <>
            <ProductCard products={products} />
        </>
    );
};

export default ProductList;
