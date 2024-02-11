import { createBrandSchema } from '@/app/lib/schemas/create-brand-schema'
import { type FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import type { z } from 'zod'

interface UseFormReturn<T extends FieldValues> {
  form: ReturnType<typeof useForm<T>>
}

const useCreateBrandForm = (
  defaulValues?: z.infer<typeof createBrandSchema>
): UseFormReturn<z.infer<typeof createBrandSchema>> => {
  const form = useForm<z.infer<typeof createBrandSchema>>({
    resolver: zodResolver(createBrandSchema),
    defaultValues: defaulValues ?? {
      name: '',
      slug: ''
    }
  })

  return {
    form
  }
}

export default useCreateBrandForm
