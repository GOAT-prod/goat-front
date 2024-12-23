import { Button } from "@/ui/button";
import { cn } from "@/utils/helpers/cn";
import { Check, Minus, Plus, X } from "lucide-react";
import { useState } from "react";

interface CartItemProps {
  className?: string;
  item: any;
}

export const CartItem = ({ className, item }: CartItemProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className={cn(
        "bg-white p-4 rounded-lg hover:border-border-hover border shadow flex flex-col gap-2",
        className
      )}
    >
      <p className="font-medium">{item.name}</p>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg">{item.price}</p>
        <div className="flex gap-2">
          <div className="flex gap-1 text-sm">
            <span className="font-medium ">Цвет:</span>
            <span className="text-[#8F8F8F]">{item.color}</span>
          </div>
          <div className="flex gap-1 text-sm">
            <span className="font-medium">Размер:</span>
            <span className="text-[#8F8F8F]">{item.size}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Button
          variant={item.isSelected ? "default" : "outline"}
          size="icon"
          className="w-8 h-8"
          onClick={() => setIsChecked(!isChecked)}
        >
          <Check size={24} className={cn(!item.isSelected && "hidden")} />
        </Button>
        <div className="flex justify-end items-center gap-2">
          <div className="flex gap-[5px] bg-black rounded-lg p-1">
            <Button
              size="icon"
              className="w-8 h-8"
              //   onClick={() => setCount(count - 1)}
            >
              <Minus />
            </Button>

            <div className="bg-primary text-white w-8 h-8 rounded-lg p-2 flex items-center justify-center cursor-pointer">
              {item.StockCount}
            </div>
            <Button
              size="icon"
              className="w-8 h-8"
              //   onClick={() => setCount(count + 1)}
              //   disabled={count === productItem.StockCount}
            >
              <Plus />
            </Button>
          </div>
          <Button
            variant={"ghost"}
            size="icon"
            className="w-8 h-8"
            //   onClick={() => setCount(count - 1)}
          >
            <X size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};
