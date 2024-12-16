import { Button } from "@/ui/button";
import { cn } from "@/utils/helpers/cn";
import { Check, Minus, Plus, X } from "lucide-react";
import { useState } from "react";

// type Cart
interface CartItemProps {
  className?: string;
  cart?: any;
}

export const CartItem = ({ className }: CartItemProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className={cn(
        "bg-white p-4 rounded-lg shadow flex flex-col gap-2",
        className
      )}
    >
      <p className="font-medium">Nike Air Max 90</p>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg">{"149 $"}</p>
        <div className="flex gap-2">
          <div className="flex gap-1">
            <span className="font-medium">Цвет:</span>
            <span className="text-[#8F8F8F]">Черный</span>
          </div>
          <div className="flex gap-1">
            <span className="font-medium">Размер:</span>
            <span className="text-[#8F8F8F]">42</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Button
          variant={isChecked ? "default" : "outline"}
          size="icon"
          className="w-8 h-8"
          onClick={() => setIsChecked(!isChecked)}
        >
          <Check size={24} className={cn(!isChecked && "hidden")} />
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
              0
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
