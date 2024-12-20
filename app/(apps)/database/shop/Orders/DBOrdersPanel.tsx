import { UnifiedPanel } from "@/components/UnifiedPannel";
import { OrderCard } from "../../admin/(components)/Orders/DBOrderCard";
import { OrderStatusDB, UserDB } from "../../(services)/types/types";
import { useGetOrdersByUserQuery } from "../../(services)/requests/order/getOrdersByUser";
import { useMemo } from "react";
import { Skeleton } from "@/ui/skeleton";

export const OrdersPanel = ({ user }: { user: UserDB }) => {
  const { data: orders, isLoading } = useGetOrdersByUserQuery(user.id);

  const activeOrders = useMemo(() => {
    return orders?.filter((order) => order.status !== OrderStatusDB.Deleted);
  }, [orders]);

  if (isLoading) {
    return (
      <UnifiedPanel
        title="Заказы"
        items={Array(6).fill({})}
        renderItem={() => <Skeleton className="w-full h-[176px]" />}
      />
    );
  }

  return (
    <UnifiedPanel
      title="Заказы"
      items={activeOrders || []}
      renderItem={(item) => <OrderCard item={item} />}
    />
  );
};
