import { Button } from "@/ui/button";
import { cn } from "@/utils/helpers/cn";
import { Check, Minus, Plus, X } from "lucide-react";

interface OrderItemProps {
  className?: string;
  item: CartItem;
}

export const OrderItem = ({ className, item }: OrderItemProps) => {
  return (
    <div
      className={cn(
        "bg-white p-4 rounded-lg shadow flex justify-between ",
        className
      )}
    >
      {/* Название + вариант */}
      <div className="flex flex-col gap-3 justify-center">
        <p className="font-medium text-lg">{item.name}</p>
        <div className="flex gap-2">
          <div className="flex gap-1">
            <span className="font-medium">Цвет:</span>
            <span className="text-[#8F8F8F]">{item.color}</span>
          </div>
          <div className="flex gap-1">
            <span className="font-medium">Размер:</span>
            <span className="text-[#8F8F8F]">{item.size}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="font-semibold px-2 py-1 bg-[#f0f7ff] border-2 border-[#52AEFF] rounded-lg w-full text-center">
          {item.price}
        </div>
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
