import { createProductSchema } from '@/app/lib/schemas/create-product-schema'
import { type FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import type { z } from 'zod'

interface UseFormReturn<T extends FieldValues> {
  form: ReturnType<typeof useForm<T>>
}

const useCreateProductForm = (
  defaulValues?: z.infer<typeof createProductSchema>
): UseFormReturn<z.infer<typeof createProductSchema>> => {
  const form = useForm<z.infer<typeof createProductSchema>>({
    resolver: zodResolver(createProductSchema),
    defaultValues: defaulValues ?? {
      brandId: '',
      categoryId: '',
      description: [{
        title: '',
        content: ''
      }],
      lifeStage: 'PUPPY',
      miniDesc: '',
      name: '',
      options: [{
        discount: '',
        name: '',
        price: '',
        stock: ''
      }],
      petType: '',
      slug: ''
    }
  })

  return {
    form
  }
}

export default useCreateProductForm
