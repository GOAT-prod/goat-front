"use client";
import { useMemo } from "react";
import { useGetOrdersQuery } from "../../../(services)/requests/order/getOrders";
import { OrderCard } from "./DBOrderCard";
import { UnifiedPanel } from "@/components/UnifiedPannel";
import { OrderStatusDB } from "../../../(services)/types/types";
import { Skeleton } from "@/ui/skeleton";

export const OrdersPanel = () => {
  const { data: orders, isLoading } = useGetOrdersQuery();

  const activeOrders = useMemo(() => {
    return orders?.filter((order) => order.status !== OrderStatusDB.Deleted);
  }, [orders]);

  if (isLoading) {
    return (
      <UnifiedPanel
        title="Заказы и поставки"
        items={Array(6).fill({})}
        renderItem={() => <Skeleton className="w-full h-[176px]" />}
      />
    );
  }

  return (
    <UnifiedPanel
      title="Заказы и поставки"
      items={activeOrders || []}
      renderItem={(item) => <OrderCard item={item} />}
    />
  );
};
