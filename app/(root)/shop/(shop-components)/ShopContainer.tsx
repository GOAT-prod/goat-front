import { Title } from "@/ui/title";

interface ShopContainerProps {
  children: React.ReactNode;
  headerDetails?: React.ReactNode;
  headerTitle: string;
}

export const ProductsContainer = ({
  children,
  headerDetails,
  headerTitle,
}: ShopContainerProps) => {
  return (
    <section className="flex-1 h-full pb-[16px] overflow-y-auto scrollbar">
      <div className="flex w-full sticky top-0  bg-background py-[16px]  shadow-black/5 px-[24px]">
        <Title
          text={headerTitle}
          size="lg"
          className=" font-semibold"
          tag="h2"
        />
        <div className="flex items-center ml-auto gap-2">{headerDetails}</div>
      </div>
      {children}
    </section>
  );
};

export const ProductContainer = ProductsContainer;
