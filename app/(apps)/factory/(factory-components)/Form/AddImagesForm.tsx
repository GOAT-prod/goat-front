import { Button } from "@/ui/button";
import { FormControl, FormField, FormItem, FormMessage } from "@/ui/form";
import { Input } from "@/ui/input";
import { Title } from "@/ui/title";
import { productSchema } from "@/utils/constants/productSchema";
import { Plus } from "lucide-react";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface AddImagesFormProps {
  form: UseFormReturn<z.infer<typeof productSchema>, any, undefined>;
}

export const AddImagesForm = ({ form }: AddImagesFormProps) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "images",
  });

  return (
    <div className="flex flex-col gap-2">
      <Title
        className="text-sm font-medium"
        tag="h5"
        text="Изображения товара"
      />

      <div className="flex gap-2 items-center">
        <Button
          type="button"
          className="h-9 w-9"
          size="icon"
          onClick={() => append({ id: 0, imageUrl: "" })}
        >
          <Plus />
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        {fields.map((field, index) => (
          <FormField
            key={field.id}
            control={form.control}
            name={`images.${index}.imageUrl`}
            render={({ field }) => (
              <div className="flex items-center gap-2">
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Введите URL изображения"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                <Button
                  type="button"
                  className="h-9 w-9"
                  size="icon"
                  onClick={() => remove(index)}
                >
                  ✕
                </Button>
              </div>
            )}
          />
        ))}
        <p className="text-red-500">{form.formState.errors.images?.message}</p>
      </div>
    </div>
  );
};
