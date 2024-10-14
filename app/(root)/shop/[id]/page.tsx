'use client'
import { BreadcrumbDemo } from "@/components/breadcrumb-demo/BreadcrumbDemo";
import { useEffect, useMemo } from "react";
import { ProductContainer } from "@/components/shop-container/ShopContainer";
import { ProductVariants } from "./(components)/product-variants/ProductVariants";
import { ProductItem } from "@/components/product-item/ProductItem";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "@/app/(services)/products";
import { SkeletonCard } from "@/components/skeleton-card/SkeletonCard";

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