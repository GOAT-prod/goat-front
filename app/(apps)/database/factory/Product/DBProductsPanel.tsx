import { UnifiedPanel } from "@/components/UnifiedPannel";
import { Button } from "@/ui/button";
import { ProductCard } from "./DBProductCard";

export const ProductsPanel = () => {
  return (
    <UnifiedPanel
      title="Товары"
      items={Array(6).fill({})}
      renderItem={() => <ProductCard item={{}} />}
      actionButton={<Button size="small">Добавить товар</Button>}
    />
  );
};
