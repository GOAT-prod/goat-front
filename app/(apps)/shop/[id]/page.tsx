import { ProductContainer } from "../(shop-components)/Catalog/CatalogContainer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Product } from "./(shop-items-components)/Product";

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <ProductContainer headerTitle="Кроссовки" headerDetails={<Breadcrumbs />}>
      <Product productId={params.id} />
    </ProductContainer>
  );
}
