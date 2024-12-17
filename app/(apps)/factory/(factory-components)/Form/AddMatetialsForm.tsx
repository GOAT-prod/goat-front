import { Button } from "@/ui/button";
import { FormControl, FormField, FormItem, FormMessage } from "@/ui/form";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { Title } from "@/ui/title";
import { productSchema } from "@/utils/constants/productSchema";
import { Select } from "@radix-ui/react-select";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface AddMatetialsFormProps {
  form: UseFormReturn<z.infer<typeof productSchema>, any, undefined>;
}

const productMaterials: ProductMaterial[] = [
  { Id: 1, Material: "Кожа" },
  { Id: 2, Material: "Ткань" },
  { Id: 3, Material: "Резина" },
  { Id: 4, Material: "Пластик" },
  { Id: 5, Material: "Замша" },
];

export const AddMatetialsForm = ({ form }: AddMatetialsFormProps) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "materials",
  });

  return (
    <div className="flex flex-col gap-4">
      <Title className="text-sm font-medium" tag="h5" text="Материалы" />

      <div className="flex flex-col gap-2">
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center gap-2">
            <FormField
              control={form.control}
              name={`materials.${index}.Id`}
              render={({ field }) => (
                <FormItem>
                  <Select
                    // При выборе материала обновляем Id и Material
                    onValueChange={(value) => {
                      const selectedMaterial = productMaterials.find(
                        (material) => String(material.Id) === value
                      );
                      if (selectedMaterial) {
                        form.setValue(
                          `materials.${index}.Id`,
                          selectedMaterial.Id
                        );
                        form.setValue(
                          `materials.${index}.Material`,
                          selectedMaterial.Material
                        );
                      }
                    }}
                    value={String(field.value)} // Устанавливаем значение Id
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите материал" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {productMaterials.map((material) => (
                        <SelectItem
                          key={material.Id}
                          value={String(material.Id)}
                        >
                          {material.Material}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="button"
              className="h-9 w-9"
              size="icon"
              onClick={() => remove(index)}
            >
              ✕
            </Button>
          </div>
        ))}
        <p className="text-red-500">
          {form.formState.errors.materials?.message}
        </p>
      </div>

      <Button
        type="button"
        onClick={() => {
          append({
            Id: productMaterials[0].Id,
            Material: productMaterials[0].Material,
          });
        }}
      >
        Добавить материал
      </Button>
    </div>
  );
};
