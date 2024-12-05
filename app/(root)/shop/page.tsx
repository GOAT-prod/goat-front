import { Suspense } from "react";
import { Filters } from "./(shop-components)/Filters";
import { ProductsContainer } from "./(shop-components)/ShopContainer";
import { ProductsCatalog } from "./(shop-components)/ProductsCatalog";
import { CatalogSettings } from "./(shop-components)/CatalogSettings";

export default async function Shop() {
  // 2.hydrate
  // const queryClient = new QueryClient();
  // await queryClient.prefetchQuery({
  //   queryKey: ['products'],
  //   queryFn: getProducts,
  // });
  // <HydrationBoundary state={dehydrate(queryClient)}>
  //   <ProductsCatalog />
  // </HydrationBoundary>
  // внутри ProductsCatalog:
  // const { data, error, isFetched } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: getProducts,
  // })
  // https://dev.to/logrocket/using-tanstack-query-with-nextjs-5bdo
  // https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr

  return (
    <>
      <aside className="w-[var(--filters-width)] py-4 px-6 border-r h-full border-border ">
        <Filters />
      </aside>
      <ProductsContainer
        headerTitle="Товары"
        headerDetails={<CatalogSettings />}
      >
        <ProductsCatalog />
      </ProductsContainer>
    </>
  );
}
