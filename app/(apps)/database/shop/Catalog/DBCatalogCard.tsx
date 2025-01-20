import { CardWrapper } from "@/components/CardWrapper";
import { InfoRow } from "@/components/InfoRow";
import { CatalogCardItem } from "./DBCatalogCardItem";
import { ProductDB } from "../../(services)/types/types";
import { useGetCartQuery } from "../../(services)/requests/getCart";
import { useUserStore } from "../../(services)/store/userStore";
import { ProductCard } from "../../../shop/(shop-components)/Product/ProductCard";

interface CatalogCardProps {
  item: ProductDB;
}

export const CatalogCard = ({ item }: CatalogCardProps) => {
  const { selectedShopUser } = useUserStore();

  return (
    // <CardWrapper>
    //   <div className="text-lg font-medium">
    //     <p>
    //       {item.brand} {item.name}
    //     </p>
    //   </div>
    //   <div className="flex gap-5 text-sm">
    //     <InfoRow label="Завод:" value={item.factoryName} />
    //     <InfoRow label="Цена:" value={String(item.price) + " $"} />
    //   </div>
    //   <InfoRow
    //     label="Материалы:"
    //     value={item.materials.map((material) => material.name).join(", ")}
    //     className="text-sm"
    //   />
    //   <div className="flex justify-between items-center">
    //     <div className="flex flex-col gap-2 w-full ">
    //       {!isLoading &&
    //         item.items.map((productItem) => (
    //           <CatalogCardItem
    //             item={item}
    //             key={productItem.id}
    //             productItem={productItem}
    //             cart={cart!.data}
    //           />
    //         ))}
    //     </div>
    //   </div>
    // </CardWrapper>

    <ProductCard product={item} />
  );
};
