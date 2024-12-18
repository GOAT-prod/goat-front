import { ProductsPanel } from "./Product/DBProductsPanel";
import { ReportsPanel } from "./Report/DBReportsPanel";

export default async function DatabaseFactory() {
  return (
    <>
      <ProductsPanel />
      <ReportsPanel />
    </>
  );
}
