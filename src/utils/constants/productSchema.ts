import { z } from "zod";

export const productSchema = z.object({
  brandName: z.string().min(1, { message: "Название бренда обязательно" }),
  factory: z.object({
    factoryName: z.string(),
    id: z.number().int(),
  }),
  id: z.number().int().nonnegative("ID должен быть положительным числом."),
  images: z
    .array(
      z.object({
        id: z
          .number()
          .int()
          .nonnegative("ID изображения должен быть положительным числом."),
        imageUrl: z.string(),
        // .url("Некорректный URL изображения")
      })
    )
    .nonempty("Необходимо добавить хотя бы одно изображение"),
  name: z.string().min(1, { message: "Название продукта обязательно" }),
  price: z.number().positive("Цена должна быть положительным числом"),
  status: z.string(),
  materials: z
    .array(
      z.object({
        Id: z
          .number()
          .int()
          .nonnegative("ID материала должен быть положительным числом."),
        Material: z.string(),
      })
    )
    .nonempty("Необходимо добавить хотя бы один материал"),
});

// items: z.array(
//   z.object({
//     color: z.string().min(1, { message: "Цвет обязателен" }),
//     // id: z
//     //   .number()
//     //   .int()
//     //   .nonnegative("ID товара должен быть положительным числом."),
//     size: z
//       .number()
//       .int()
//       .nonnegative("Размер должен быть положительным числом"),
//     stockCount: z
//       .number()
//       .int()
//       .nonnegative("Количество на складе должно быть положительным числом"),
//     weight: z.number().positive("Вес должен быть положительным число"),
//   })
// ),
// .nonempty("Необходимо добавить хотя бы один товар."),
