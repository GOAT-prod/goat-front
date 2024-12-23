import { Button } from "@/ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductItemCardProps {
  productItem: ProductItem;
}

export const ProductItemCard = ({ productItem }: ProductItemCardProps) => {
  const [count, setCount] = useState(0);
  const [isAddet, setIsAddet] = useState(false);

  return (
    <div className="flex gap-4 items-center justify-between bg-background border border-border hover:border-border-hover shadow rounded-lg p-6">
      <div className="flex gap-2">
        <div className="font-medium">Цвет:</div>
        <div className="text-[#8F8F8F] w-[80px] truncate">
          {productItem.Color}
        </div>
      </div>
      <div className="flex gap-2">
        <div className="font-medium">Размер:</div>
        <span className="text-[#8F8F8F]">{productItem.Size}</span>
        <div className="font-medium">Вес:</div>
        <span className="text-[#8F8F8F]">{productItem.Weight}</span>
      </div>
      {!isAddet && (
        <Button onClick={() => setIsAddet(true)} className="w-[114px]">
          <ShoppingCart className="w-5 h-5 mr-2" />В корзину
        </Button>
      )}
      {isAddet && (
        <div className="flex gap-[5px] bg-black rounded-lg p-1">
          <Button
            size="icon"
            className="w-8 h-8"
            disabled={count === 0}
            onClick={() => setCount(count - 1)}
          >
            <Minus />
          </Button>

          <div className="bg-primary text-white w-8 h-8 rounded-lg p-2 flex items-center justify-center cursor-pointer">
            {count}
          </div>
          <Button
            size="icon"
            className="w-8 h-8"
            onClick={() => setCount(count + 1)}
            disabled={count === productItem.StockCount}
          >
            <Plus />
          </Button>
        </div>
      )}
    </div>
  );
};
