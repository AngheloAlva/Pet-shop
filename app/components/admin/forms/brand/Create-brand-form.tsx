/* eslint-disable @typescript-eslint/no-misused-promises */

'use client'

import { createBrand } from '@/app/lib/api/shop/brand'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import useCreateBrandForm from '@/app/hooks/forms/useCreateBrandForm'
import { useToast } from '@/app/components/ui/use-toast'
import { Button } from '@/app/components/ui/button'
import ImageField from '../category/Image-field'
import { Form } from '@/app/components/ui/form'
import GenericField from '../Generic-field'

import type { createBrandSchema } from '@/app/lib/schemas/create-brand-schema'
import type { z } from 'zod'

function CreateBrandForm (
  { authId }: { authId: string }
): React.ReactElement {
  const [image, setImage] = useState<string>('no image')
  const { form } = useCreateBrandForm()
  const { toast } = useToast()
  const router = useRouter()

  const onSubmit = async (values: z.infer<typeof createBrandSchema>): Promise<void> => {
    try {
      await createBrand({
        ...values,
        image,
        authId
      })

      toast({
        title: 'Brand created',
        description: 'The brand was created successfully',
        duration: 3000
      })
      router.push('/admin/brands')
    } catch (error) {
      toast({
        title: 'Error creating brand',
        description: 'There was an error creating the brand, please try again later',
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
        <ImageField image={image} setImage={setImage} />

        <Button type="submit" className="bg-blue-400 w-full hover:bg-blue-300">
          Create Brand
        </Button>
      </form>
    </Form>
  )
}

export default CreateBrandForm
