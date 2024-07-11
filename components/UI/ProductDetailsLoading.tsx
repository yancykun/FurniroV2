import { Skeleton } from './skeleton';

const ProductDetailsLoading = () => {
    return (
        <div className="flex w-full flex-col items-center md:items-start">
            <div className="grid gap-4">
                <Skeleton className="h-10 w-[200px] rounded-full bg-color-6/50" />
                <Skeleton className="h-8 w-[100px] rounded-full bg-color-6/50" />
                <div className="flex gap-4">
                    <Skeleton className="h-6 w-[120px] rounded-full bg-color-6/50" />
                    <Skeleton className="h-6 w-[60px] rounded-full bg-color-6/50" />
                </div>
                <Skeleton className="h-[150px] w-[400px] rounded-[2rem] bg-color-6/50" />
                <div className="flex gap-4">
                    <Skeleton className="h-10 w-[100px] rounded-[1rem] bg-color-6/50" />
                    <Skeleton className="h-10 w-[180px] rounded-[1rem] bg-color-6/50" />
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsLoading;
