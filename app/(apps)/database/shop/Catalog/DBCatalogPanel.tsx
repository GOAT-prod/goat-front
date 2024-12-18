import { UnifiedPanel } from "@/components/UnifiedPannel";
import { CatalogCard } from "./DBCatalogCard";

export const CatalogPanel = () => {
  return (
    <UnifiedPanel
      title="Каталог"
      items={Array(6).fill({})}
      renderItem={() => <CatalogCard item={{}} />}
    />
  );
};
