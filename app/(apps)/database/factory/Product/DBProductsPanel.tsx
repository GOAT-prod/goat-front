"use client";
import { UnifiedPanel } from "@/components/UnifiedPannel";
import { ProductCard } from "./DBProductCard";
import { useGetProductsQuery } from "../../(services)/requests/getProductByUser";
import { DBCreateProduct } from "./DBCreateProduct";
import { UserDB } from "../../(services)/types/types";

interface ProductPanelProps {
  user: UserDB;
}

export const ProductsPanel = ({ user }: ProductPanelProps) => {
  const { data: products } = useGetProductsQuery(user.clientId);

  return (
    <>
      <UnifiedPanel
        title="Товары"
        items={products?.data || []}
        renderItem={(item) => <ProductCard item={item} />}
        actionButton={<DBCreateProduct />}
      />
    </>
  );
};
