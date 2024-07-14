import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import StarRating from '../StarRating/StarRating';

type ProductCardProps = {
    products: Product[];
};

const ProductCard = ({ products }: ProductCardProps) => {
    return (
        <div className="mx-auto mb-5 grid w-fit grid-cols-1 justify-center justify-items-center gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <div key={product.id} className="relative grid">
                    <Link href={product.url}>
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={292}
                            height={300}
                            className="mb-4 h-[300px] w-[292px] cursor-pointer rounded-xl object-cover"
                        />
                    </Link>
                    <div className="mx-3 mb-2 flex items-center justify-end gap-4">
                        <StarRating rating={product.rating} />
                        <p className="text-[0.875rem] md:text-[1rem]">
                            ({product.popularity})
                        </p>
                    </div>
                    <div className="mx-3 mb-2 flex items-center justify-between">
                        <p className="text-[1rem] font-semibold md:text-[1.25rem]">
                            {product.name}
                        </p>
                        <p className="text-[1.25rem] font-bold md:text-[1.5rem]">
                            ${product.price}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
