"use client";
import { useState, useEffect } from "react";
import { useUserStore } from "../(services)/store/userStore";
import { ProductsPanel } from "./Product/DBProductsPanel";
import { ReportsPanel } from "./Report/DBReportsPanel";

export default function UserFactoryContainer() {
  const { selectedFactoryUser } = useUserStore((state) => state);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Если клиент еще не инициализирован, рендерим placeholder
  if (!isClient) {
    return <div>Загрузка...</div>;
  }

  if (!selectedFactoryUser) {
    return <div>Пользователь не выбран</div>;
  }

  return (
    <>
      <ProductsPanel user={selectedFactoryUser} />
      <ReportsPanel />
    </>
  );
}
