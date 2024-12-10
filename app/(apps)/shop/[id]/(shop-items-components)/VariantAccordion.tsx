"use client";
import { cn } from "@/utils/helpers/cn";
import { ProductVariant } from "./ChoiseVariant";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/accordion";
import { RadioGroup } from "@/ui/radio-group";

interface ProductVariantsContainerProps {
  title: string;
  items: string[];
  className?: string;
}

export const ProductVariantsContainer = ({
  className,
  title,
  items,
}: ProductVariantsContainerProps) => {
  return (
    <div className={cn("", className)}>
      <AccordionItem className="mb-4" value={title}>
        <AccordionTrigger className="pt-0">{title}</AccordionTrigger>
        <AccordionContent>
          <RadioGroup defaultValue={items[0]}>
            {items.map((item, index) => {
              return (
                <ProductVariant
                  id={`${item} ${index}`}
                  text={item}
                  key={`${item} ${index}`}
                />
              );
            })}
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};
