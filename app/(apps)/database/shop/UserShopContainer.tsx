"use client";
import { CartPanel } from "./Cart/DBCartPanel";
import { useUserStore } from "../(services)/store/userStore";
import { CatalogPanel } from "./Catalog/DBCatalogPanel";
import { OrdersPanel } from "./Orders/DBOrdersPanel";
import { useEffect, useState } from "react";

export default function UserShopContainer() {
  const { selectedShopUser } = useUserStore((state) => state);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Загрузка...</div>;
  }

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
