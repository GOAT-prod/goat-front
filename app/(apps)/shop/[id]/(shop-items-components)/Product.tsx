"use client";
import { useGetProductQuery } from "@/hooks/query/useGetProductQuery";
import { ProductLeftSide } from "./ProductLeftSide";
import { ProductRightSide } from "./ProductRightSide";

interface CatalogItemProps {
  productId: string;
}

export const Product = ({ productId }: CatalogItemProps) => {
  const { data: product, isLoading } = useGetProductQuery(+productId);

  return (
    <div className="px-6 flex justify-between gap-6 ">
      <ProductLeftSide product={product?.data} isLoading={isLoading} />
      <ProductRightSide product={product?.data} isLoading={isLoading} />
    </div>
  );
};
