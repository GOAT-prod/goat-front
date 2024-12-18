import { UnifiedPanel } from "@/components/UnifiedPannel";
import { OrderCard } from "../../admin/(components)/Orders/DBOrderCard";

export const OrdersPanel = () => {
  return (
    <UnifiedPanel
      title="Заказы"
      items={Array(6).fill({})}
      renderItem={() => <OrderCard />}
    />
  );
};
