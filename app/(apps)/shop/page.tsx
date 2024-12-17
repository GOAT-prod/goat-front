import { Filters } from "./(shop-components)/Filters/Filters";
import { ProductsCatalog } from "./(shop-components)/Catalog/ProductsCatalog";
import { CatalogSettings } from "./(shop-components)/Catalog/CatalogSettings";
import { CatalogContainer } from "./(shop-components)/Catalog/CatalogContainer";

export default async function Shop() {
  return (
    <>
      {/* <aside className="w-[var(--filters-width)] py-4 px-6  border-r border-border">
        <Filters />
      </aside> */}
      <CatalogContainer
        headerTitle="Товары"
        headerDetails={<CatalogSettings />}
      >
        <ProductsCatalog />
      </CatalogContainer>
    </>
  );
}
