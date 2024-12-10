"use client";

import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../../(services)/products";
import { ProductContainer } from "../(shop-components)/ShopContainer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductItem } from "../../../(components)/ProductItem";
import { ProductVariants } from "./(shop-items-components)/ProductVariants";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { data, isLoading } = useQuery({
    queryKey: [`product/${params.id}`],
    queryFn: () => getProduct(+params.id),
  });

  return (
    <>
      <aside className="w-[var(--filters-width)] py-4 px-6 border-r h-full border-border ">
        {data && <ProductVariants productItems={data.items} />}
      </aside>
      <ProductContainer headerTitle="Товар" headerDetails={<Breadcrumbs />}>
        {isLoading && <div>Loading</div>}
        {data && <ProductItem product={data} />}
      </ProductContainer>
    </>
  );
}
