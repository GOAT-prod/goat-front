import { CatalogContainer } from "../shop/(shop-components)/Catalog/CatalogContainer";
import { CreateProduct } from "./CreateProduct";

export default async function Factory() {
  return (
    <>
      {/* <aside className="w-[var(--filters-width)] py-4 px-6  border-r border-border">
        <Filters />
      </aside> */}
      <CatalogContainer headerTitle="Товары">
        {/* <CreateProductDialog /> */}
        <CreateProduct />
        <div>Список продуктов</div>
        {/* <ProductsCatalog /> */}
      </CatalogContainer>
    </>
  );
}
