import { Skeleton } from "../UI/skeleton";

const OrderedProductsLoading = () => {
  return (
    <div className="w-full sm:w-[300px]">
      <div className="flex items-center gap-4">
        <Skeleton className="mb-4 h-[100px] w-[140px] rounded-xl bg-color-6/30" />
        <div className="grid">
          <Skeleton className="mb-4 h-[1.5rem] w-[100px] rounded-xl bg-color-6/30" />
          <Skeleton className="mb-4 h-[1.5rem] w-[100px] rounded-xl bg-color-6/30" />
        </div>
      </div>
    </div>
  );
};

export default OrderedProductsLoading;
