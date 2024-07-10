import { Skeleton } from './skeleton';

const ProductSkeletonLoading = () => {
    return (
        <div className="h-[300px] w-[292px]">
            <Skeleton className="mb-4 h-[300px] w-[292px] rounded-xl bg-color-6/30" />
            <div className="mx-3 mb-2 flex items-end justify-end gap-6">
                <Skeleton className="h-[20px] w-[100px] rounded-full bg-color-6/50" />
                <Skeleton className="h-[20px] w-[40px] rounded-full bg-color-6/50" />
            </div>
            <div className="mx-3 mb-2 flex items-center justify-between">
                <Skeleton className="h-[20px] w-[150px] rounded-full bg-color-6/50" />
                <Skeleton className="h-[24px] w-[60px] rounded-full bg-color-6/50" />
            </div>
        </div>
    );
};

export default ProductSkeletonLoading;
