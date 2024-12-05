import { Accordion } from "@/ui/accordion";
import { Title } from "@/ui/title";
import { useMemo } from "react";
import { ProductVariantsContainer } from "./VariantAccordion";

export type ProductVarinats = {
  colors?: string[];
  sizes?: string[];
};

interface ProductVariantsProps {
  productItems: ProductItem[];
  className?: string;
}

export const ProductVariants = ({ productItems }: ProductVariantsProps) => {
  const colors = productItems.map((item) => item.color);
  const sizes = productItems.map((item) => item.size);

  console.log(colors);
  console.log(sizes);

  return (
    <div className="flex flex-col gap-6">
      <Title text="Варианты" size="lg" className="font-semibold" tag="h2" />
      <Accordion type="multiple" className="w-full">
        {colors && <ProductVariantsContainer title={"Цвета"} items={colors} />}
        {sizes && <ProductVariantsContainer title={"Размеры"} items={sizes} />}
      </Accordion>
      {/* <div className='flex flex-col gap-3'>
            <div>
                <p>Выбранный вариант:</p> <span>{''}</span>
            </div>
            <Button className='w-full' size='small'>Добавить</Button>
        </div> */}
    </div>
  );
};
