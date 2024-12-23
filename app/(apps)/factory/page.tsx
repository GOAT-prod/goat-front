import { CatalogContainer } from "../shop/(shop-components)/Catalog/CatalogContainer";
import { CreateProductDialog } from "./(factory-components)/CreateProductDialog";

export default async function Factory() {
  return (
    <>
      {/* <aside className="w-[var(--filters-width)] py-4 px-6  border-r border-border">
        <Filters />
      </aside> */}
      <CatalogContainer headerTitle="Товары">
        {/* <CreateProductDialog /> */}
        <div>Список продуктов</div>
        {/* <ProductsCatalog /> */}
      </CatalogContainer>
    </>
  );
}
