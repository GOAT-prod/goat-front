"use client";
import { CartPanel } from "./Cart/DBCartPanel";
import { useUserStore } from "../(services)/store/userStore";
import { CatalogPanel } from "./Catalog/DBCatalogPanel";
import { OrdersPanel } from "./Orders/DBOrdersPanel";

export default function UserShopContainer() {
  const { selectedShopUser } = useUserStore((state) => state);

  if (!selectedShopUser) {
    return <div>Пользователь не выбран</div>;
  }

  return (
    <>
      <CatalogPanel />
      <CartPanel user={selectedShopUser} />
      <OrdersPanel user={selectedShopUser} />
    </>
  );
}
