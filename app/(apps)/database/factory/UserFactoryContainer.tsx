"use client";
import { useUserStore } from "../(services)/store/userStore";
import { ProductsPanel } from "./Product/DBProductsPanel";
import { ReportsPanel } from "./Report/DBReportsPanel";

export default function UserFactoryContainer() {
  const { selectedFactoryUser } = useUserStore((state) => state);

  if (!selectedFactoryUser) {
    return <div>Пользователь не выбран</div>;
  }

  return (
    <>
      <h1>{selectedFactoryUser?.name}</h1>
      <ProductsPanel user={selectedFactoryUser} />
      <ReportsPanel user={selectedFactoryUser} />
    </>
  );
}
