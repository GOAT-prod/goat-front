import { Title } from "@/ui/title";

interface ShopContainerProps {
  children: React.ReactNode;
  headerDetails?: React.ReactNode;
  headerTitle: string;
}

export const CatalogContainer = ({
  children,
  headerDetails,
  headerTitle,
}: ShopContainerProps) => {
  return (
    <section className="flex-1 pb-4">
      <div className="flex w-full sticky top-0  bg-background py-4  shadow-black/5 px-6">
        <Title
          text={headerTitle}
          size="lg"
          className=" font-semibold"
          tag="h2"
        />
        <div className="flex items-center ml-auto gap-2">{headerDetails}</div>
      </div>
      <div className="">{children}</div>
    </section>
  );
};

export const ProductContainer = CatalogContainer;
