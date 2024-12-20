import { UnifiedPanel } from "@/components/UnifiedPannel";
import { Button } from "@/ui/button";
import { CartItem } from "./DBCartCard";
import { useGetCartQuery } from "../../(services)/requests/getCart";
import { useUserStore } from "../../(services)/store/userStore";
import { UserDB } from "../../(services)/types/types";
import { Skeleton } from "@/ui/skeleton";

// const cartItem = {
//   id: 9,
//   isSelected: true,
//   name: "Mizuno Wave Rider 26",
//   price: "12 490 ₽",
//   color: "Фиолетовый",
//   size: "44",
//   StockCount: 7,
// };

export const CartPanel = ({ user }: { user: UserDB }) => {
  const { data: cart, isLoading } = useGetCartQuery(user.id);

  if (isLoading) {
    return (
      <UnifiedPanel
        title="Корзина"
        items={Array(6).fill({})}
        renderItem={() => <Skeleton className="w-full h-[176px]" />}
      />
    );
  }

  return (
    <UnifiedPanel
      title="Корзина"
      items={cart?.data.cartItems || []}
      renderItem={(item) => <CartItem item={item} userId={user.id} />}
      actionButton={<Button size="small">Создать заказ</Button>}
    />
  );
};
