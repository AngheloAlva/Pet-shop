import { createCategorySchema } from '@/app/lib/schemas/create-category-schema'
import { type FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import type { z } from 'zod'

interface UseFormReturn<T extends FieldValues> {
  form: ReturnType<typeof useForm<T>>
}

const useCreateCategoryForm = (): UseFormReturn<z.infer<typeof createCategorySchema>> => {
  const form = useForm<z.infer<typeof createCategorySchema>>({
    resolver: zodResolver(createCategorySchema),
    defaultValues: {
      description: '',
      name: '',
      petType: 'DOG',
      slug: ''
    }
  })

  return {
    form
  }
}

export default useCreateCategoryForm
