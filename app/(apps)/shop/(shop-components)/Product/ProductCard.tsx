import React from "react";

import { cn } from "@/utils/helpers/cn";
import { Button } from "@/ui/button";
import { Title } from "@/ui/title";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { CartDB, ProductDB } from "../../../database/(services)/types/types";
import { CatalogCardDrawer } from "../../../database/shop/Catalog/DBCatalogCardDrawet";

interface ProductCardProps {
  product: ProductDB;
  onClick?: () => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <ProductCardLayout className="cursor-pointer" onClick={onClick}>
      <ProductCardHeader className="h-full w-full">
        <img
          alt="Карточка товара"
          src={product.images[0].url}
          className="w-full min-h-full"
        />
      </ProductCardHeader>
      <ProductCardContent>
        <ProductCardTitle>{product.name}</ProductCardTitle>
      </ProductCardContent>
      <ProductCardFooter className="flex items-center justify-between">
        <Title size="md" text={`${product.price} $`} />
        <Button size="small">
          <CatalogCardDrawer item={product} />
        </Button>
      </ProductCardFooter>
    </ProductCardLayout>
  );
};

const ProductCardLayout = Card;

const ProductCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
ProductCardContent.displayName = "ProductCardContent";

const ProductCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col justify-end overflow-hidden rounded-md bg-white",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const ProductCardTitle = CardTitle;

const ProductCardDescription = CardDescription;

const ProductCardFooter = CardFooter;

export {
  ProductCardContent,
  ProductCardDescription,
  ProductCardFooter,
  ProductCardHeader,
  ProductCardLayout,
  ProductCardTitle,
};
