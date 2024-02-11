/* eslint-disable @typescript-eslint/no-misused-promises */

'use client'

import useCreateProductForm from '@/app/hooks/forms/useCreateProductForm'
import { updateProduct } from '@/app/lib/api/shop/product'
import { useRouter } from 'next/navigation'

import GenericTextAreaField from '../Generic-text-area-field'
import LifeStageSelectField from './Life-stage-select-field'
import CategorySelectField from './Category-select-field'
import PetTypeSelectField from './Pet-type-select-field'
import DescriptionFields from './Description-fields'
import { Button } from '@/app/components/ui/button'
import BrandSelectField from './Brand-select-field'
import { Separator } from '../../../ui/separator'
import { useToast } from '../../../ui/use-toast'
import { Form } from '@/app/components/ui/form'
import GenericField from '../Generic-field'

import type { createProductSchema } from '@/app/lib/schemas/create-product-schema'
import type { z } from 'zod'

interface UpdateProductFormProps {
  authId: string
  productId: number
  defaultValues: z.infer<typeof createProductSchema>
}

function UpdateProductForm (
  { authId, defaultValues, productId }: UpdateProductFormProps
): React.ReactElement {
  const { form } = useCreateProductForm(defaultValues)
  const { toast } = useToast()
  const router = useRouter()

  const onSubmit = async (values: z.infer<typeof createProductSchema>): Promise<void> => {
    try {
      await updateProduct({
        productId,
        authId,
        ...values,
        categoryId: Number(values.categoryId),
        brandId: Number(values.brandId),
        petType: [values.petType]
      })

      toast({
        title: 'Product updated',
        description: 'The product has been updated successfully',
        duration: 3000
      })

      router.push('/admin/products')
    } catch (error) {
      toast({
        title: 'Error updating product',
        description: 'There was an error updating the product. Please try again',
        variant: 'destructive',
        duration: 3000
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <GenericField control={form.control} name="name" label='Name' placeholder='Name' />
        <GenericField control={form.control} name="slug" label='Slug' placeholder='slug-slug' />
        <CategorySelectField control={form.control} />
        <BrandSelectField control={form.control} />
        <GenericTextAreaField control={form.control} name="miniDesc" label='Mini Description' placeholder='Mini Description' />
        <PetTypeSelectField control={form.control} />
        <LifeStageSelectField control={form.control} />
        <div className='space-y-4 sm:col-span-2'>
          <DescriptionFields form={form} />
          <Separator />
        </div>

        <Button type="submit" className='mt-4 sm:col-span-2 bg-blue-400 hover:bg-blue-300'>
          Update Product
        </Button>
      </form>
    </Form>
  )
}

export default UpdateProductForm
