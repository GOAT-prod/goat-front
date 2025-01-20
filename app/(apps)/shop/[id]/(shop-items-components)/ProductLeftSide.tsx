import { SkeletonCard } from "@/components/SkeletonCard";
import { Skeleton } from "@/ui/skeleton";
import { Title } from "@/ui/title";
import { ProductDB } from "../../../database/(services)/types/types";

interface ProductLeftSideProps {
  product: ProductDB;
  isLoading?: boolean;
}

export const ProductLeftSide = ({
  product,
  isLoading,
}: ProductLeftSideProps) => {
  if (isLoading) {
    return (
      <div className="flex flex-col space-y-6 w-[40%]">
        <Skeleton className="min-h-[468px] rounded-xl" />
        <div className="space-y-6">
          <Skeleton className="h-24 rounded-xl" />
          <Skeleton className="h-24 rounded-xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-[40%]">
      <div className="bg-background-secondary p-6 rounded-lg border-[1.5px] border-border">
        <img
          src={product?.images[0].url}
          alt="Карточка товара"
          className="rounded-md "
        />
      </div>

      <div className="p-6 flex gap-4 bg-background-secondary rounded-lg border-[1.5px] border-border">
        <div className="flex-1">
          <Title
            tag="h1"
            size="2xl"
            text={product?.brand || "Бренд"}
            className="mb-4 font-semibold leading-7"
          />
          <Title
            size="lg"
            text={product?.name || "Название кроссовок"}
            className="font-medium"
          />
        </div>
        <Title
          size="2xl"
          text={`${product?.price || 0} $`}
          className="font-semibold leading-[2.3]"
        />
      </div>
      <div className="p-6 bg-background-secondary rounded-lg border-[1.5px] border-border">
        <div className="text-sm flex flex-col gap-3">
          <div className="flex gap-[15px] items-center h-[40px]">
            <p className="w-[100px] font-medium">Изготовитель:</p>
            <p className="text-[#8F8F8F]">
              {product?.factoryName || "Завод кроссовок"}
            </p>
          </div>
          <div className="flex gap-[15px] items-center h-[40px]">
            <p className="w-[100px] font-medium">Материалы:</p>
            <p className="text-[#8F8F8F]">
              {product?.materials
                .reduce((acc, material) => (acc += material.name + ", "), "")
                .slice(0, -2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
