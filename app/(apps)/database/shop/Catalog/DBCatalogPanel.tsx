import { UnifiedPanel } from "@/components/UnifiedPannel";
import { CatalogCard } from "./DBCatalogCard";

import { Skeleton } from "@/ui/skeleton";
import { useGetProductsQuery } from "../../(services)/requests/getProducts";

export const CatalogPanel = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return (
      <UnifiedPanel
        title="Пользователи сервиса"
        items={Array(6).fill({})}
        renderItem={() => <Skeleton className="w-full h-[176px]" />}
      />
    );
  }

  return (
    <UnifiedPanel
      title="Каталог"
      items={products?.data || []}
      renderItem={(item) => <CatalogCard item={item} />}
    />
  );
};
