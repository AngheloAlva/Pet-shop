/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import useCreateCategoryForm from '@/app/hooks/forms/useCreateCategoryForm'
import { updateCategory } from '@/app/lib/api/shop/category'
import { useRouter } from 'next/navigation'

import PetTypeSelectField from '../product/Pet-type-select-field'
import GenericTextAreaField from '../Generic-text-area-field'
import { useToast } from '@/app/components/ui/use-toast'
import { Button } from '@/app/components/ui/button'
import { Form } from '@/app/components/ui/form'
import GenericField from '../Generic-field'

import type { createCategorySchema } from '@/app/lib/schemas/create-category-schema'
import type { z } from 'zod'

function UpdateCategoryForm (
  { authId, defaultValues, categoryId }: UpdateCategoryFormProps
): React.ReactElement {
  const { form } = useCreateCategoryForm(defaultValues)
  const { toast } = useToast()
  const router = useRouter()

  const onSubmit = async (values: z.infer<typeof createCategorySchema>): Promise<void> => {
    try {
      await updateCategory(categoryId, {
        ...values,
        authId
      })

      toast({
        title: 'Category updated',
        description: 'The category was updated successfully',
        duration: 3000
      })
      router.push('/admin/categories')
    } catch (error) {
      toast({
        title: 'Error updating category',
        description: 'There was an error updating the category, please try again later',
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

        <Button type="submit" className="bg-blue-400 w-full hover:bg-blue-300">
          Update Category
        </Button>
      </form>
    </Form>
  )
}

export default UpdateCategoryForm

interface UpdateCategoryFormProps {
  authId: string
  defaultValues: z.infer<typeof createCategorySchema>
  categoryId: number
}
