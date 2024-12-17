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
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { Title } from "@/ui/title";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { TextField } from "./TextField";
import { AddImagesForm } from "./AddImagesForm";
import { AddMatetialsForm } from "./AddMatetialsForm";

export const CreateProductForm = () => {
  const createForm = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      brandName: "",
      factory: {
        factoryName: "",
        id: 0,
      },
      id: 0,
      name: "",
      price: 0,
      status: "created",
      materials: [],
      images: [],
    },
  });

  const onSubmit = (values: z.infer<typeof productSchema>) => {
    console.log("wawdaw");
    console.log(values);
  };

  return (
    <>
      <Form {...createForm}>
        <form
          className="space-y-4 w-full p-6"
          onSubmit={createForm.handleSubmit(onSubmit)}
        >
          <div className="flex gap-6">
            {/* Бренд, название, цена */}
            <div className="flex flex-col gap-4 w-1/3">
              <TextField
                title="Бренд кроссовок"
                placeholder={"Введите бренд"}
                name={"brandName"}
                control={createForm.control}
              />
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
                        type="text"
                        placeholder="Введите цену"
                        {...field}
                        onChange={(e) =>
                          field.onChange(Number(e.target.value) ?? undefined)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                control={createForm.control}
                name="price"
              />
            </div>
            <AddImagesForm form={createForm} />
          </div>
          <AddMatetialsForm form={createForm} />
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
