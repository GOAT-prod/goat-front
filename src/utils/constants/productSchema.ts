import { z } from "zod";

export const productSchema = z.object({
  brand: z.string(),
  factoryId: z.number().int(),
  factoryName: z.string(),
  id: z.number().int().nonnegative("ID должен быть положительным числом."),
  items: z
    .array(
      z.object({
        color: z.string().min(1, { message: "Цвет обязателен" }),
        id: z
          .number()
          .int()
          .nonnegative("ID товара должен быть положительным числом.")
          .optional(),
        size: z
          .number()
          .int()
          .nonnegative("Размер должен быть положительным числом")
          .optional(),
        count: z
          .number()
          .int()
          .nonnegative("Количество на складе должно быть положительным числом")
          .optional(),
        weight: z
          .number()
          .positive("Вес должен быть положительным числом")
          .optional(),
      })
    )
    .nonempty("Необходимо добавить хотя бы один товар."),
  images: z
    .array(
      z.object({
        id: z
          .number()
          .int()
          .nonnegative("ID изображения должен быть положительным числом."),
        url: z.string().url("Некорректный URL изображения"),
        productId: z
          .number()
          .int()
          .nonnegative("ID продукта должен быть положительным числом."), // Добавлено поле productId
      })
    )
    .nonempty("Необходимо добавить хотя бы одно изображение"),
  name: z.string().min(1, { message: "Название продукта обязательно" }),
  price: z.number().positive("Цена должна быть положительным числом"),
  status: z.string(),
  materials: z
    .array(
      z.object({
        id: z
          .number()
          .int()
          .nonnegative("ID материала должен быть положительным числом."),
        name: z.string(),
      })
    )
    .nonempty("Необходимо добавить хотя бы один материал"),
});
