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

export const AddMaterialsForm = ({ form }: AddMatetialsFormProps) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "materials",
  });

  const selectedMaterialIds = form.watch("materials")?.map((m) => m.Id) || [];

  return (
    <div className="flex flex-col gap-2 min-w-[240px]">
      <Title className="text-sm font-medium" tag="h5" text="Материалы" />
      <div className="flex flex-col gap-2 justify-start">
        <Button
          type="button"
          size="small"
          onClick={() => {
            const availableMaterial = productMaterials.find(
              (material) => !selectedMaterialIds.includes(material.Id)
            );
            if (availableMaterial) {
              append({
                Id: availableMaterial.Id,
                Material: availableMaterial.Material,
              });
            }
          }}
        >
          Добавить материал
        </Button>
        <p className="text-red-500 text-[13px] font-medium">
          {form.formState.errors.materials?.message}
        </p>
      </div>
      <div className="flex flex-col gap-2 h-[300px] overflow-auto pr-3 scrollbar px-3 py-1">
        {fields.map((field, index) => {
          const availableMaterials = productMaterials.filter(
            (material) =>
              !selectedMaterialIds.includes(material.Id) ||
              material.Id === field.Id
          );

          return (
            <div key={field.id} className="flex items-center gap-2">
              <FormField
                control={form.control}
                name={`materials.${index}.Id`}
                render={({ field }) => (
                  <FormItem>
                    <Select
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
                      value={String(field.value)}
                    >
                      <FormControl>
                        <SelectTrigger className="min-w-[180px]">
                          <SelectValue placeholder="Выберите материал" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {availableMaterials.map((material) => (
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
                className="h-6 w-6"
                size="icon"
                onClick={() => remove(index)}
              >
                ✕
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
