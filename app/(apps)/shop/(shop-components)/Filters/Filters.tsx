"use client";
import { Title } from "@/ui/title";
import { Input } from "@/ui/input";
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup";
import { useGetFiltersQuery } from "@/hooks/useGetFiltersQuery";
import { RangeSlider } from "@/ui/range-slider";
import { Skeleton } from "@/ui/skeleton";

export const Filters = () => {
  const { data: filters, isLoading } = useGetFiltersQuery();

  return (
    <div className="flex flex-col gap-4 h-full">
      <Title
        text="Фильтрация"
        size="lg"
        className="font-semibold sticky"
        tag="h2"
      />
      <CheckboxFiltersGroup
        loading={isLoading}
        title="Бренды"
        name="brands"
        items={
          filters?.data.BrandNames.map((item) => ({
            text: item,
            value: item,
          })) || []
        }
      />
      <hr />
      <Title className="mb-3 font-medium" size="md" text={"Цена от и до:"} />
      {isLoading ? (
        <Skeleton className="mb-4 h-6 rounded-[8px]" />
      ) : (
        <RangeSlider
          min={0}
          max={300}
          step={10}
          value={[filters?.data.MinPrice || 0, filters?.data.MaxPrice || 300]}
          // onValueChange={updatePrices}
        />
      )}

      <hr />
      <CheckboxFiltersGroup
        title="Материалы"
        name="materials"
        loading={isLoading}
        items={
          filters?.data.Materials.map((item) => ({
            text: item,
            value: item,
          })) || []
        }
      />
      <hr />
      <CheckboxFiltersGroup
        title="Цвета"
        name="colors"
        loading={isLoading}
        items={
          filters?.data.Colors.map((item) => ({
            text: item,
            value: item,
          })) || []
        }
      />
    </div>
  );
};
