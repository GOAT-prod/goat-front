import { UnifiedPanel } from "@/components/UnifiedPannel";
import { CartItem } from "./DBCartCard";
import { useGetCartQuery } from "../../(services)/requests/getCart";
import { UserDB } from "../../(services)/types/types";
import { Skeleton } from "@/ui/skeleton";
import { OrderDialog } from "../Orders/DBOrderDialog";
import { AlertCart } from "./DBAlertCart";

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
    <>
      <UnifiedPanel
        title="Корзина"
        items={cart?.data.cartItems || []}
        renderItem={(item) => <CartItem item={item} userId={user.id} />}
        actionButton={
          <div className="flex items-center gap-3">
            <OrderDialog cart={cart!.data} />
            <AlertCart user={user} />
          </div>
        }
      />
    </>
  );
};
