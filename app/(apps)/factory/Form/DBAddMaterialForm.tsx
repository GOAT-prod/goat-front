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
// import { ProductMaterialDB } from "../../../(services)/types/types";

interface AddMatetialsFormProps {
  form: UseFormReturn<z.infer<typeof productSchema>, any, undefined>;
}

const productMaterials = [
  { id: 1, name: "Сетчатый текстиль (Mesh)" },
  { id: 2, name: "Нейлон" },
  { id: 3, name: "Кожа" },
  { id: 4, name: "Синтетическая ткань (PU или PVC)" },
  { id: 5, name: "Гума (резина)" },
  { id: 6, name: "ЭВА (EVA)" },
  { id: 7, name: "Пенополиуретан (PU)" },
  { id: 8, name: "Термопластичный полиуретан (TPU)" },
  { id: 9, name: "Карбоновое волокно" },
  { id: 10, name: "Ткань с водоотталкивающей пропиткой" },
];

export const AddMatetialsForm = ({ form }: AddMatetialsFormProps) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "materials",
  });

  return (
    <div className="flex flex-col gap-2 min-w-[240px]">
      <Title className="text-sm font-medium" tag="h5" text="Материалы" />
      <div className="flex flex-col gap-2  justify-start ">
        <Button
          type="button"
          size="small"
          onClick={() => {
            append({
              id: productMaterials[0].id,
              name: productMaterials[0].name,
            });
          }}
        >
          Добавить материал
        </Button>
        <p className="text-red-500 text-[13px] font-medium">
          {form.formState.errors.materials?.message}
        </p>
      </div>
      <div className="flex flex-col gap-2 h-[300px] overflow-auto pr-3 scrollbar px-3 py-1">
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center gap-2 ">
            <FormField
              control={form.control}
              name={`materials.${index}.id`}
              render={({ field }) => (
                <FormItem>
                  <Select
                    // При выборе материала обновляем Id и Material
                    onValueChange={(value) => {
                      const selectedMaterial = productMaterials.find(
                        (material) => String(material.id) === value
                      );
                      if (selectedMaterial) {
                        form.setValue(
                          `materials.${index}.id`,
                          selectedMaterial.id
                        );
                        form.setValue(
                          `materials.${index}.name`,
                          selectedMaterial.name
                        );
                      }
                    }}
                    value={String(field.value)} // Устанавливаем значение Id
                  >
                    <FormControl>
                      <SelectTrigger className="w-[250px] text-left text-ellipsis">
                        <SelectValue placeholder="Выберите материал" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {productMaterials.map((material) => (
                        <SelectItem
                          key={material.id}
                          value={String(material.id)}
                        >
                          {material.name}
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
