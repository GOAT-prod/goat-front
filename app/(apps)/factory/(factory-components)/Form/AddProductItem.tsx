import { Button } from "@/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Input } from "@/ui/input";
import { InputWithIcon } from "@/ui/InputWithIcon";
import { Title } from "@/ui/title";
import { productSchema } from "@/utils/constants/productSchema";
import { Calculator, Palette, Plus, Ruler, Weight } from "lucide-react";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface AddProductItemProps {
  form: UseFormReturn<z.infer<typeof productSchema>, any, undefined>;
}

export const AddProductItem = ({ form }: AddProductItemProps) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "items",
  });

  return (
    <div className="flex flex-col gap-2 min-w-[500px] flex-1">
      <Title
        className="text-sm font-medium"
        tag="h5"
        text="Добавление товаров"
      />
      <div className="flex flex-col gap-2  justify-start ">
        <Button
          type="button"
          size="small"
          onClick={() =>
            append({
              id: 0,
              color: "",
              size: undefined,
              stockCount: undefined,
              weight: undefined,
            })
          }
        >
          Добавить вариант товара
        </Button>
        <p className="text-red-500 text-[13px] font-medium">
          {form.formState.errors.items?.message}
        </p>
      </div>

      <div className="flex flex-col gap-4 p-3 h-[300px] overflow-auto pr-3 scrollbar">
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-2 items-center">
            {/* <FormField
              control={form.control}
              name={`items.${index}.id`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID товара</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Введите ID товара"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name={`items.${index}.color`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-2">
                      <InputWithIcon
                        type="text"
                        className="w-[200px]"
                        placeholder="Цвет"
                        {...field}
                        icon={<Palette size={16} />}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`items.${index}.size`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithIcon
                      className="w-[110px]"
                      type="number"
                      placeholder="Размер"
                      {...field}
                      onChange={(e) =>
                        field.onChange(Number(e.target.value) ?? undefined)
                      }
                      icon={<Ruler size={16} />}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`items.${index}.stockCount`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithIcon
                      type="number"
                      className="w-[110px]"
                      placeholder="Кол.во"
                      {...field}
                      onChange={(e) =>
                        field.onChange(Number(e.target.value) ?? undefined)
                      }
                      icon={<Calculator size={16} />}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`items.${index}.weight`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithIcon
                      className="w-[100px]"
                      type="number"
                      placeholder="Вес"
                      {...field}
                      onChange={(e) =>
                        field.onChange(Number(e.target.value) ?? undefined)
                      }
                      icon={<Weight size={16} />}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="button"
              className="h-6 w-6"
              size="icon"
              onClick={() => remove(index)}
            >
              ✕
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
