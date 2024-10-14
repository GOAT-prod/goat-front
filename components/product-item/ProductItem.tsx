import { Button } from "../ui/button";
import { Title } from "../ui/title";

interface CatalogItemProps {
  product: Product;
}

export const ProductItem = ({ product }: CatalogItemProps) => {
  return (
    <div className="px-6 pb-6 flex gap-6">
      <div className="w-[55.2%]">
        {/* Картинка */}
        <div className="bg-background-secondary p-6 rounded-lg border-[1.5px] border-border">
          <img src={product.images[0].imageUrl} alt="Карточка товара" className="rounded-md" />
        </div>
        {/* Табличка */}
        <div></div>
      </div>
      <div className="flex-1 flex flex-col gap-6 pt-6">
        <div>
          <Title tag="h1" size="2xl" text={product.brand.name} className="mb-4 font-semibold leading-7" />
          <Title size="lg" text={product.name} className="font-medium" />
        </div>
        <div className="p-6 flex flex-col gap-4 bg-background-secondary rounded-lg border-[1.5px] border-border">
          <Title size="2xl" text={`${product.price} $`} className="font-semibold" />
          <Button size={'large'} className="w-[160px]">Добавить в заказ</Button>
          <div className="text-sm">
            <div className="flex gap-[15px] ">
              <p className="w-[100px] mb-3.5">Вес товара:</p>
              <p className="text-[#8F8F8F]">725г</p>
            </div>
            <div className="flex gap-[15px]">
              <p className="w-[100px] ">Изготовитель:</p>
              <p className="text-[#8F8F8F]">Puma Performance Factory</p>
            </div>
          </div>
        </div>
      </div>
    </ div>
  )
}