import { Button } from "@/ui/button";
import { cn } from "@/utils/helpers/cn";
import {
  Check,
  CircleCheck,
  CircleX,
  Copy,
  Minus,
  Package,
  Plus,
  Truck,
  X,
} from "lucide-react";
import { useMemo } from "react";

interface OrderedItemProps {
  className?: string;
}

export const OrderedItem = ({ className }: OrderedItemProps) => {
  // Define possible statuses with their styles and icons
  const statuses = [
    {
      label: "Собирается",
      styles: "bg-[#F5FBFF] border-[#BDE3FF]",
      Icon: Package,
    },
    {
      label: "В пути",
      styles: "bg-[#FFF8F0] border-[#FCD19C]",
      Icon: Truck,
    },
    {
      label: "Отменен",
      styles: "bg-[#FDE3DE] border-[#F24822]",
      Icon: CircleX,
    },
    {
      label: "Доставлен",
      styles: "bg-[#DCF3E6] border-[#14AE5C]",
      Icon: CircleCheck,
    },
  ];

  // Randomly select a status
  const selectedStatus = useMemo(() => {
    return statuses[Math.floor(Math.random() * statuses.length)];
  }, []);

  return (
    <div
      className={cn(
        "bg-white px-4 py-3 rounded-lg shadow flex justify-between",
        className
      )}
    >
      {/* Order details */}
      <div className="flex flex-col gap-3 justify-center flex-1">
        <div className="text-base text-[#8F8F8F] flex gap-2 items-center">
          <p>От {"28 ноября 2023"}</p>•<p>112512151</p>
          <Button variant={"ghost"} size="icon">
            <Copy size={18} />
          </Button>
        </div>
        <div className="flex justify-between items-center">
          {/* Order characteristics */}
          <div className="flex gap-2 flex-col">
            <div className="flex gap-1">
              <span className="font-medium">Вес:</span>
              <span className="text-[#8F8F8F]">15.5 кг</span>
            </div>
            <div className="flex gap-1">
              <span className="font-medium">Цена:</span>
              <span className="text-[#8F8F8F]">1270 $</span>
            </div>
          </div>
          {/* Order status */}
          <div
            className={cn(
              "rounded-lg px-2 flex gap-2 items-center h-[40px] border-2",
              selectedStatus.styles
            )}
          >
            <selectedStatus.Icon />
            <p className="font-medium text-lg">{selectedStatus.label}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
