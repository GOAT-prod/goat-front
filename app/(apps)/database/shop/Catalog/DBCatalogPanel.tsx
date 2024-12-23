import { UnifiedPanel } from "@/components/UnifiedPannel";
import { CatalogCard } from "./DBCatalogCard";

import { Skeleton } from "@/ui/skeleton";
import { useGetProductsQuery } from "../../(services)/requests/getProducts";
import { PopularItemsSwitch } from "./DBPupularItemsSwitch";
import { useState } from "react";

export const CatalogPanel = () => {
  const [isPopular, setIsPopular] = useState(false);
  const { data: products, isLoading } = useGetProductsQuery(isPopular);

  const handleTogglePopular = () => {
    setIsPopular((state) => !state);
  };

  const filteredProducts =
    products?.data.filter((product) => product.status !== "Deleted") || [];

  if (isLoading) {
    return (
      <UnifiedPanel
        title="Каталог"
        items={Array(6).fill({})}
        actionButton={
          <PopularItemsSwitch
            isLoading={isLoading}
            switcher={handleTogglePopular}
            state={isPopular}
          />
        }
        renderItem={() => <Skeleton className="w-full h-[176px]" />}
      />
    );
  }

  return (
    <UnifiedPanel
      title="Каталог"
      items={filteredProducts}
      actionButton={
        <PopularItemsSwitch switcher={handleTogglePopular} state={isPopular} />
      }
      renderItem={(item) => <CatalogCard item={item} />}
    />
  );
};
