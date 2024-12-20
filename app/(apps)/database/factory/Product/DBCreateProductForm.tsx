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
import { TextField } from "./Form/DBTextField";
import { AddImagesForm } from "./Form/AddImagesFormdb";
import { AddMatetialsForm } from "./Form/DBAddMaterialForm";
import { AddProductItem } from "./Form/DBAddProductItem";
import { useUserStore } from "../../(services)/store/userStore";
import { useCreateProduct } from "../../(services)/requests/createProduct";
import { queryClient } from "@/utils/api/query-client";
import { Title } from "@/ui/title";

export const CreateProductForm = ({ onClose }: { onClose: () => void }) => {
  const { selectedFactoryUser } = useUserStore((state) => state);

  const createForm = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      brand: "",
      factoryId: selectedFactoryUser?.clientId,
      factoryName: selectedFactoryUser?.name,
      id: 0,
      name: "",
      status: "created",
      materials: [],
      images: [],
      items: [],
    },
  });

  const { mutate, isPending, isError } = useCreateProduct({
    onSuccess: (data) => {
      console.log("Продукт добавлен:", data);
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      console.error("Ошибка при добавлении продукта:", error);
    },
  });

  console.log(createForm.formState.errors);

  const onSubmit = (values: z.infer<typeof productSchema>) => {
    mutate(values);
    onClose();
  };

  return (
    <>
      <Form {...createForm}>
        <form
          className="space-y-8 w-full p-6"
          onSubmit={createForm.handleSubmit(onSubmit)}
        >
          <div className="flex gap-4">
            <TextField
              title="Название кроссовок"
              placeholder={"Введите название"}
              name={"name"}
              control={createForm.control}
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
              control={createForm.control}
              name="price"
            />
            {isError && (
              <Title
                text="Ошибка добавления продукта"
                className="text-red-400"
              />
            )}
          </div>
          <div className="flex gap-6">
            <AddImagesForm form={createForm} />
            <div className="min-h-full w-[1px] bg-[#cecece]" />
            <AddMatetialsForm form={createForm} />
            <div className="min-h-full w-[1px] bg-[#cecece]" />
            <AddProductItem form={createForm} />
          </div>

          <div className="flex gap-5 items-center">
            <Button type="submit" className="w-full">
              Создать товар
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
