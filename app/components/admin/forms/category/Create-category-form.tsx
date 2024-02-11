/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import useCreateCategoryForm from '@/app/hooks/forms/useCreateCategoryForm'
import { createCategory } from '@/app/lib/api/shop/category'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import PetTypeSelectField from '../product/Pet-type-select-field'
import GenericTextAreaField from '../Generic-text-area-field'
import { useToast } from '@/app/components/ui/use-toast'
import { Button } from '@/app/components/ui/button'
import { Form } from '@/app/components/ui/form'
import GenericField from '../Generic-field'
import ImageField from './Image-field'

import type { createCategorySchema } from '@/app/lib/schemas/create-category-schema'
import type { z } from 'zod'

function CreateCategoryForm (
  { authId }: { authId: string }
): React.ReactElement {
  const [image, setImage] = useState<string>('no image')
  const { form } = useCreateCategoryForm()
  const { toast } = useToast()
  const router = useRouter()

  const onSubmit = async (values: z.infer<typeof createCategorySchema>): Promise<void> => {
    try {
      await createCategory({
        ...values,
        image,
        authId
      })

      toast({
        title: 'Category created',
        description: 'The category was created successfully',
        duration: 3000
      })
      router.push('/admin/categories')
    } catch (error) {
      toast({
        title: 'Error creating category',
        description: 'There was an error creating the category, please try again later',
        variant: 'destructive',
        duration: 3000
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <GenericField control={form.control} name="name" label="Name" placeholder='Name' />
        <GenericField control={form.control} name="slug" label="Slug" placeholder='slug-slug' />
        <GenericTextAreaField control={form.control} name="description" label="Description" placeholder='Description' />
        <PetTypeSelectField control={form.control} />
        <ImageField image={image} setImage={setImage} />

        <Button type="submit" className="sm:col-span-2 bg-blue-400 w-full hover:bg-blue-300">
          Create Category
        </Button>
      </form>
    </Form>
  )
}

export default CreateCategoryForm
