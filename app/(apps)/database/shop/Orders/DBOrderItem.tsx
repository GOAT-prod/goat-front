import { Button } from "@/ui/button";
import { cn } from "@/utils/helpers/cn";
import { Check, Minus, Plus, X } from "lucide-react";
import { CartItemDB } from "../../(services)/types/types";
import { useUpdateCartItem } from "../../(services)/requests/updateCartItem";
import { queryClient } from "@/utils/api/query-client";
import { useDeleteCartItem } from "../../(services)/requests/deleteCartItem";

interface OrderItemProps {
  className?: string;
  item: CartItemDB;
}

interface OrderItemProps {
  className?: string;
  item: CartItemDB;
  userId: number;
}

export const OrderItem = ({ className, item, userId }: OrderItemProps) => {
  const { mutate: updateCartItem } = useUpdateCartItem({
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["cart", userId] }),
  });
  const { mutate: deleteCartItem } = useDeleteCartItem(userId);

  const handleCountChange = (newCount: number) => {
    if (newCount <= 0) {
      deleteCartItem(item.id);
    } else {
      updateCartItem({ ...item, selectCount: newCount });
    }
  };

  const handleSelectToggle = () => {
    updateCartItem({ ...item, isSelected: !item.isSelected });
  };

  return (
    <div
      className={cn(
        "bg-white p-4 rounded-lg shadow flex justify-between",
        className
      )}
    >
      {/* Название + вариант */}
      <div className="flex flex-col gap-3 justify-center">
        <p className="font-medium text-lg">{item.productName}</p>
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

      {/* Количество и цена */}
      <div className="flex flex-col items-center gap-2">
        <div className="font-semibold px-2 py-1 bg-[#f0f7ff] border-2 border-[#52AEFF] rounded-lg w-full text-center">
          {item.price} $
        </div>

        <div className="flex justify-end items-center gap-2">
          <div className="flex gap-[5px] bg-black rounded-lg p-1">
            <Button
              size="icon"
              className="w-8 h-8"
              onClick={() => handleCountChange(item.selectCount - 1)}
              disabled={item.selectCount <= 1}
            >
              <Minus />
            </Button>

            <div className="bg-primary text-white w-8 h-8 rounded-lg p-2 flex items-center justify-center cursor-pointer">
              {item.selectCount}
            </div>

            <Button
              size="icon"
              className="w-8 h-8"
              onClick={() => handleCountChange(item.selectCount + 1)}
            >
              <Plus />
            </Button>
          </div>

          <Button
            variant={item.isSelected ? "default" : "outline"}
            size="icon"
            className="w-8 h-8"
            onClick={handleSelectToggle}
          >
            <X />
          </Button>
        </div>
      </div>
    </div>
  );
};
