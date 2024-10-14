'use client';
import { useRouter } from 'next/navigation';
import { ProductCard } from '../product-card/ProductCard';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/app/(services)/products';
import { SkeletonCard } from '../skeleton-card/SkeletonCard';



export const ProductsCatalog = () => {
  const router = useRouter();

  const onRedirectToProduct = (product: Product) => {
    router.push(`/shop/${product.id}`)
  }

  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  return (
    <div className="grid grid-cols-4 gap-[24px] p-[24px] pt-0">
      {isLoading && Array(12).fill(0).map(() => {
        return <SkeletonCard />
      })}
      {data && data?.map((product, index) => (
        <div key={index}>
          <ProductCard product={product} onClick={() => onRedirectToProduct(product)} />
        </div>
      ))}
    </div>
  );
};
