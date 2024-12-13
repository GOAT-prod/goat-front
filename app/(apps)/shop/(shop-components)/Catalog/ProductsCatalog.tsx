"use client";
import { useRouter } from "next/navigation";
import { SkeletonCard } from "@/components/SkeletonCard";
import { ProductCard } from "../Product/ProductCard";
import { useGetProductsQuery } from "@/hooks/useGetProductsQuery";

export const ProductsCatalog = () => {
  const router = useRouter();

  const { data: products, isLoading } = useGetProductsQuery();

  const onRedirectToProduct = (product: Product) => {
    router.push(`/shop/${product.id}`);
  };

  return (
    <div className="grid grid-cols-4 gap-6 p-6 pt-0">
      {isLoading &&
        Array(12)
          .fill(0)
          .map((_, index) => {
            return <SkeletonCard key={index} />;
          })}
      {products &&
        products?.data.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onClick={() => onRedirectToProduct(product)}
          />
        ))}
    </div>
  );
};
