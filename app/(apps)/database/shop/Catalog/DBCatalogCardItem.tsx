import { Button } from "@/ui/button";
import { Palette, Ruler, ShoppingCart, Weight } from "lucide-react";
import { CartDB, ProductDB, ProductItemDB } from "../../(services)/types/types";
import { useCreateCartItem } from "../../(services)/requests/createCartItem";

interface CatalogCardItemProps {
  item: ProductDB;
  productItem: ProductItemDB;
  cart: CartDB;
}

export const CatalogCardItem = ({
  item,
  productItem,
  cart,
}: CatalogCardItemProps) => {
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
  };

  return (
    <div className="flex items-center justify-between bg-background border border-border hover:border-border-hover shadow rounded-lg p-3">
      <div className="flex gap-1 text-sm flex-1 items-center">
        <Palette size={16} />
        <p>{productItem.color}</p>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-1 text-sm items-center">
          <Ruler size={16} />
          <p>{productItem.size}</p>
        </div>
        <div className="flex gap-1 text-sm min-w-[70px] items-center">
          <Weight size={16} />
          <p>{productItem.weight} кг</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            className="bg-[#dcf3e6] border-[#14AE5C] border-2"
            size="icon"
            onClick={handleAddItemToCard}
          >
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
};
