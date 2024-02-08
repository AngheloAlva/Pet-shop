import { z } from 'zod'

const rutRegex = /^\d{1,2}\.\d{3}\.\d{3}-[0-9kK]$/

export const userFormSchema = z.object({
  name: z.string().min(2),
  lastName: z.string().min(2),
  rut: z.string().regex(rutRegex),
  phone: z.string().min(9).max(12)
})
