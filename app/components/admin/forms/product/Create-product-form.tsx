/* eslint-disable @typescript-eslint/no-misused-promises */

'use client'

import useCreateProductForm from '@/app/hooks/forms/useCreateProductForm'
import { createProduct } from '@/app/lib/api/shop/product'
import { useState } from 'react'

import GenericTextAreaField from '../Generic-text-area-field'
import LifeStageSelectField from './Life-stage-select-field'
import CategorySelectField from './Category-select-field'
import PetTypeSelectField from './Pet-type-select-field'
import DescriptionFields from './Description-fields'
import BrandSelectField from './Brand-select-field'
import { Separator } from '../../../ui/separator'
import { useToast } from '../../../ui/use-toast'
import { Form } from '@/app/components/ui/form'
import OptionsFields from './Options-fields'
import { Button } from '../../../ui/button'
import GenericField from '../Generic-field'
import ImageField from './Image-field'

import type { createProductSchema } from '@/app/lib/schemas/create-product-schema'
import type { z } from 'zod'
import { useRouter } from 'next/navigation'

function CreateProductForm (
  { authId }: { authId: string }
): React.ReactElement {
  const [images, setImages] = useState<string[]>([])
  const { form } = useCreateProductForm()
  const { toast } = useToast()
  const router = useRouter()

  console.log(form.getValues())
  console.log(form.formState.errors)

  const onSubmit = async (values: z.infer<typeof createProductSchema>): Promise<void> => {
    try {
      await createProduct({
        authId,
        images,
        ...values,
        categoryId: Number(values.categoryId),
        brandId: Number(values.brandId),
        petType: [values.petType],
        options: values.options.map(option => ({
          ...option,
          price: Number(option.price),
          stock: Number(option.stock),
          discount: Number(option.discount)
        }))
      })

      console.log({
        authId,
        images,
        ...values,
        categoryId: Number(values.categoryId),
        brandId: Number(values.brandId),
        petType: [values.petType]
      })

      toast({
        title: 'Product created',
        description: 'The product has been created successfully',
        duration: 3000
      })
      router.push('/admin/products')
    } catch (error) {
      console.log(error)
      toast({
        title: 'Error creating product',
        description: 'There was an error creating the product, please try again later',
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
        <ImageField setImages={setImages} images={images} />
        <div className='space-y-4 sm:col-span-2'>
          <Separator />
          <OptionsFields form={form} />
          <Separator />
        </div>
        <div className='space-y-4 sm:col-span-2'>
          <DescriptionFields form={form} />
          <Separator />
        </div>

        <Button type="submit" className='mt-4 sm:col-span-2 bg-blue-400 hover:bg-blue-300'>
          Create Product
        </Button>
        <span>
          {form.formState.isSubmitting && 'Submitting...'}
        </span>
      </form>
    </Form>
  )
}

export default CreateProductForm
