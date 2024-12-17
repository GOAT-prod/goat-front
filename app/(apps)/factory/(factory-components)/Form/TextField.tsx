import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Input } from "@/ui/input";
import { productSchema } from "@/utils/constants/productSchema";
import { ChangeEvent } from "react";
import { Control } from "react-hook-form";
import { z } from "zod";

interface TextFieldProps {
  title: string;
  name: keyof z.infer<typeof productSchema>;
  placeholder: string;
  control: Control<z.infer<typeof productSchema>, any>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = ({
  title,
  name,
  placeholder,
  control,
  onChange,
}: TextFieldProps) => {
  return (
    <FormField
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <FormControl>
            <Input
              type="text"
              placeholder={placeholder}
              {...field}
              onChange={onChange}
              value={
                typeof field.value === "object"
                  ? JSON.stringify(field.value)
                  : field.value
              }
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
      control={control}
      name={name}
    />
  );
};
