import { CartPanel } from "./Cart/DBCartPanel";
import { CatalogPanel } from "./Catalog/DBCatalogPanel";
import { OrdersPanel } from "./Orders/DBOrdersPanel";

export default async function DatabaseShop() {
  return (
    <>
      <CatalogPanel />
      <CartPanel />
      <OrdersPanel />
    </>
  );
}
