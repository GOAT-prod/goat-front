"use client";
import { Button } from "@/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Input } from "@/ui/input";
import { productSchema } from "@/utils/constants/productSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { queryClient } from "@/utils/api/query-client";
import { Title } from "@/ui/title";
import { useUpdateProduct } from "../../../(services)/requests/updateProduct";
import { TextField } from "../Form/DBTextField";
import { AddImagesForm } from "../Form/AddImagesFormdb";
import { AddMatetialsForm } from "../Form/DBAddMaterialForm";
import { AddProductItem } from "../Form/DBAddProductItem";
import { ProductDB } from "../../../(services)/types/types";

export const UpdateProductForm = ({
  onClose,
  product,
}: {
  onClose: () => void;
  product: ProductDB;
}) => {
  const updateForm = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      id: product.id,
      factoryId: product.factoryId,
      factoryName: product.factoryName,
      name: product.name,
      brand: product.brand,
      price: product.price,
      status: product.status,
      materials: product.materials,
      items: product.items,
      images: product.images,
    },
  });

  const { mutate, isPending, isError } = useUpdateProduct({
    onSuccess: (data) => {
      console.log("Продукт обновлен:", data);
      queryClient.invalidateQueries({ queryKey: ["products"] });
      onClose();
    },
    onError: (error) => {
      console.error("Ошибка при обновлении продукта:", error);
    },
  });

  const onSubmit = (values: z.infer<typeof productSchema>) => {
    // @ts-ignore
    mutate(values);
  };

  return (
    <Form {...updateForm}>
      <form
        className="space-y-8 w-full p-6"
        onSubmit={updateForm.handleSubmit(onSubmit)}
      >
        <div className="flex gap-4">
          <TextField
            title="Название кроссовок"
            placeholder={"Введите название"}
            name={"name"}
            control={updateForm.control}
          />
          <FormField
            render={({ field }) => (
              <FormItem>
                <FormLabel>Цена</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Введите цену"
                    {...field}
                    value={field.value ?? ""}
                    onChange={(e) => {
                      const value = e.target.value
                        ? Number(e.target.value)
                        : undefined;
                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            control={updateForm.control}
            name="price"
          />
          {isError && (
            <Title text="Ошибка обновления продукта" className="text-red-400" />
          )}
        </div>
        <div className="flex gap-6">
          <AddImagesForm form={updateForm} />
          <div className="min-h-full w-[1px] bg-[#cecece]" />
          <AddMatetialsForm form={updateForm} />
          <div className="min-h-full w-[1px] bg-[#cecece]" />
          <AddProductItem form={updateForm} />
        </div>

        <div className="flex gap-5 items-center">
          <Button type="submit" className="w-full">
            Сохранить изменения
          </Button>
        </div>
      </form>
    </Form>
  );
};
