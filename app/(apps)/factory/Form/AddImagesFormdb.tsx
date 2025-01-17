import { useUserStore } from "@/store/userStore";
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
  // const { selectedFactoryUser } = useUserStore((state) => state);

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "images",
  });

  return (
    <div className="flex flex-col gap-2  min-w-[265px] ">
      <Title
        className="text-sm font-medium"
        tag="h5"
        text="Изображения товара"
      />

      <div className="flex flex-col gap-2  justify-start ">
        <Button
          type="button"
          size="small"
          onClick={() => append({ id: 0, url: "", productId: 0 })}
        >
          Добавить изображение товара
        </Button>
        <p className="text-red-500 text-[13px] font-medium">
          {form.formState.errors.images?.message}
        </p>
      </div>

      <div className="flex flex-col gap-2 h-[300px] overflow-auto pr-3 scrollbar">
        {fields.map((field, index) => (
          <FormField
            key={field.id}
            control={form.control}
            name={`images.${index}.url`}
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
                  className="h-6 w-6"
                  size="icon"
                  onClick={() => remove(index)}
                >
                  ✕
                </Button>
              </div>
            )}
          />
        ))}
      </div>
    </div>
  );
};
