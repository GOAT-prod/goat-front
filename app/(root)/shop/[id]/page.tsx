'use client'
import { getProduct } from "@/app/(services)/products";
import { BreadcrumbDemo } from "@/src/components/breadcrumb-demo/BreadcrumbDemo";
import { ProductItem } from "@/src/components/product-item/ProductItem";
import { ProductContainer } from "@/src/components/shop-container/ShopContainer";
import { SkeletonCard } from "@/src/components/skeleton-card/SkeletonCard";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { ProductVariants } from "./(components)/product-variants/ProductVariants";

export default function ProductPage({ params }: { params: { id: string } }) {

  const { data, isLoading } = useQuery({
    queryKey: [`product/${params.id}`],
    queryFn: () => getProduct(+params.id),
  })

  return (
    <>
      {/* TODO rename fitters на sidebar */}
      <aside className="w-[var(--filters-width)] py-4 px-6 border-r h-full border-border ">
        {data && <ProductVariants productItems={data.items} />}
      </aside>
      <ProductContainer headerTitle="Товар" headerDetails={<BreadcrumbDemo />}>
        {isLoading && <div>Loading</div>}
        {data && <ProductItem product={data} />}
      </ProductContainer>
    </>
  );
}