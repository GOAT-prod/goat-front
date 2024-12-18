import { UnifiedPanel } from "@/components/UnifiedPannel";
import { Button } from "@/ui/button";
import { CartItem } from "./DBCartCard";

const cartItem = {
  id: 9,
  isSelected: true,
  name: "Mizuno Wave Rider 26",
  price: "12 490 ₽",
  color: "Фиолетовый",
  size: "44",
  StockCount: 7,
};

export const CartPanel = () => {
  return (
    <UnifiedPanel
      title="Корзина"
      items={Array(6).fill({})}
      renderItem={() => <CartItem item={cartItem} />}
      actionButton={<Button size="small">Создать заказ</Button>}
    />
  );
};
