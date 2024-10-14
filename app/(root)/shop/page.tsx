import { CatalogSettings } from '@/components/catalog-settings/CatalogSettings';
import { Filters } from '@/components/filters/Filters';
import { ProductsCatalog } from '@/components/products/Products';
import { ProductsContainer } from '@/components/shop-container/ShopContainer';
import { Suspense, useMemo } from 'react';

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
      {/* TODO* aside в sidebar */}
      <aside className="w-[var(--filters-width)] py-4 px-6 border-r h-full border-border ">
        <Suspense>
          <Filters />
        </Suspense>
      </aside>
      <ProductsContainer headerTitle={'Товары'} headerDetails={<CatalogSettings />}>
        <ProductsCatalog />
      </ProductsContainer>
    </>
  );
}
