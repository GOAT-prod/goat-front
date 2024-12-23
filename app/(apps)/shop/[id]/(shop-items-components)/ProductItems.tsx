import { Title } from "@/ui/title";
import { ProductItemCard } from "./ProductItemCard";
import { SortProductItem } from "./SortProductItem";
import { useMemo, useState } from "react";

interface ProductItemsProps {
  productItems?: ProductItem[];
  isLoading?: boolean;
}

export const ProductItems = ({ productItems }: ProductItemsProps) => {
  const [value, setValue] = useState("default");

  const changeItemsSortType = (value: string) => {
    setValue(value);
  };

  const sortedProducts = useMemo(() => {
    if (value === "default") {
      return productItems;
    }

    return productItems?.toSorted((a, b) => {
      switch (value) {
        case "color":
          return a.Color.localeCompare(b.Color);
        case "size":
          return a.Size - b.Size;
        case "weight":
          return a.Weight - b.Weight;
        case "stock":
          return a.StockCount - b.StockCount;
        default:
          return 0;
      }
    });
  }, [value]);

  return (
    <div className="bg-background-secondary min-h-full rounded-lg border-[1.5px] border-border p-6 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Title size="lg" text={"Варианты кроссовок"} className="font-medium" />
        <SortProductItem onChange={changeItemsSortType} />
      </div>
      <div className="overflow-y-auto scrollbar flex flex-col gap-3">
        {sortedProducts?.map((item) => (
          <ProductItemCard key={item.id} productItem={item} />
        ))}
      </div>
    </div>
  );
};
