import { OrderCard } from "./DBOrderCard";
import { UnifiedPanel } from "@/components/UnifiedPannel";

export const OrdersPanel = () => {
  return (
    <UnifiedPanel
      title="Заказы и поставки"
      items={Array(6).fill({})}
      renderItem={() => <OrderCard />}
    />
  );
};
