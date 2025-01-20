import { Button } from "@/ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { CartDB, ProductDB, ProductItemDB } from "../../../../../@types/types";
import { useCreateCartItem } from "../../../database/(services)/requests/createCartItem";

interface ProductItemCardProps {
  item: ProductDB;
  productItem: ProductItemDB;
  cart: CartDB;
  onClose: () => void;
}

export const ProductItemCard = ({
  productItem,
  cart,
  item,
  onClose,
}: ProductItemCardProps) => {
  const { mutate } = useCreateCartItem(cart.userId);

  const handleAddItemToCard = () => {
    mutate({
      id: 0,
      productItemId: productItem.id,
      productName: item.name,
      price: item.price,
      cartId: cart.id,
      color: productItem.color,
      size: productItem.size,
      selectCount: 1,
      isSelected: false,
    });
    onClose();
  };

  return (
    <div className="flex gap-4 items-center justify-between bg-background border border-border hover:border-border-hover shadow rounded-lg p-6">
      <div className="flex gap-2">
        <div className="font-medium">Цвет:</div>
        <div className="text-[#8F8F8F] w-[80px] truncate">
          {productItem.color}
        </div>
      </div>
      <div className="flex gap-2">
        <div className="font-medium">Размер:</div>
        <span className="text-[#8F8F8F]">{productItem.size}</span>
        <div className="font-medium">Вес:</div>
        <span className="text-[#8F8F8F]">{productItem.weight}</span>
      </div>

      <Button onClick={handleAddItemToCard} className="w-[114px]">
        <ShoppingCart className="w-5 h-5 mr-2" />В корзину
      </Button>
    </div>
  );
};
