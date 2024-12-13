import { ProductContainer } from "../(shop-components)/Catalog/CatalogContainer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductItem } from "../../../(components)/ProductItem";

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <>
      <ProductContainer headerTitle="Кроссовки" headerDetails={<Breadcrumbs />}>
        <ProductItem productId={params.id} />
      </ProductContainer>
    </>
  );
}
