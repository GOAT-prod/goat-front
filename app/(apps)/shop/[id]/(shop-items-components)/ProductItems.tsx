import { Title } from "@/ui/title";
import { ProductItemCard } from "./ProductItemCard";
import { SortProductItem } from "./SortProductItem";
import { useMemo, useState } from "react";
import { ProductItemDB } from "../../../../../@types/types";
import { useGetCartQuery } from "../../../database/(services)/requests/getCart";
import { ProductDB } from "../../../database/(services)/types/types";
import { useUserStore } from "../../../database/(services)/store/userStore";

interface ProductItemsProps {
  productItems?: ProductItemDB[];
  isLoading?: boolean;
  product?: ProductDB;
  onClose: () => void;
}

export const ProductItems = ({
  productItems,
  product,
  onClose,
}: ProductItemsProps) => {
  const [value, setValue] = useState("default");
  const { selectedShopUser } = useUserStore((state) => state);
  const { data: cart, isLoading } = useGetCartQuery(selectedShopUser!.id);

  const changeItemsSortType = (value: string) => {
    setValue(value);
  };

  const sortedProducts = useMemo(() => {
    if (value === "default") {
      return productItems;
    }

    return productItems?.toSorted((a, b) => {
      switch (value) {
        case "color":
          return a.color.localeCompare(b.color);
        case "size":
          return a.size - b.size;
        case "weight":
          return a.weight - b.weight;
        default:
          return 0;
      }
    });
  }, [value]);

  return (
    <div className="bg-background-secondary min-h-full rounded-lg border-[1.5px] border-border p-6 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Title size="lg" text={"Варианты кроссовок"} className="font-medium" />
        <SortProductItem onChange={changeItemsSortType} />
      </div>
      <div className="overflow-y-auto scrollbar flex flex-col gap-3">
        {sortedProducts?.map((item) => (
          <ProductItemCard
            key={item.id}
            productItem={item}
            cart={cart!.data}
            item={product as ProductDB}
            onClose={onClose}
          />
        ))}
      </div>
    </div>
  );
};

// interface CatalogCardItemProps {
//   item: ProductDB;
//   productItem: ProductItemDB;
//   cart: CartDB;
// }

// export const CatalogCardItem = ({
//   item,
//   productItem,
//   cart,
// }: CatalogCardItemProps) => {
//   const { mutate } = useCreateCartItem(cart.userId);

//   const handleAddItemToCard = () => {
//     mutate({
//       id: 0,
//       productItemId: productItem.id,
//       productName: item.name,
//       price: item.price,
//       cartId: cart.id,
//       color: productItem.color,
//       size: productItem.size,
//       selectCount: 1,
//       isSelected: false,
//     });
//   };

//   return (
//     <div className="flex items-center justify-between bg-background border border-border hover:border-border-hover shadow rounded-lg p-3">
//       <div className="flex gap-1 text-sm flex-1 items-center">
//         <Palette size={16} />
//         <p>{productItem.color}</p>
//       </div>
//       <div className="flex gap-4 items-center">
//         <div className="flex gap-1 text-sm items-center">
//           <Ruler size={16} />
//           <p>{productItem.size}</p>
//         </div>
//         <div className="flex gap-1 text-sm min-w-[70px] items-center">
//           <Weight size={16} />
//           <p>{productItem.weight} кг</p>
//         </div>
//         <div className="flex gap-2">
//           <Button
//             variant="ghost"
//             className="bg-[#dcf3e6] border-[#14AE5C] border-2"
//             size="icon"
//             onClick={handleAddItemToCard}
//           >
//             <ShoppingCart />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };
