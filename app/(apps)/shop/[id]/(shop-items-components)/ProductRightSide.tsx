import { ProductItems } from "./ProductItems";
import { Skeleton } from "@/ui/skeleton";

interface ProductRightSideProps {
  product?: Product;
  isLoading?: boolean;
}

export const ProductRightSide = ({
  product,
  isLoading,
}: ProductRightSideProps) => {
  if (isLoading) {
    return (
      <div className="flex flex-col space-y-6 w-[60%]">
        {Array.from({ length: 6 }, (_, index) => (
          <Skeleton key={index} className="h-[98px] rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col gap-6 ">
      <ProductItems productItems={product?.Items} />
    </div>
  );
};
