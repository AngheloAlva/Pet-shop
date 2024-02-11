import { number, z } from 'zod'

export const updateOptionFormSchema = z.object({
  price: z.string().or(number()),
  stock: z.string().or(number()),
  discount: z.string().or(number())
})
