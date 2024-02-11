import { getCategoryById } from '@/app/lib/api/shop/category'
import { auth } from '@clerk/nextjs'

import UpdateCategoryForm from '@/app/components/admin/forms/category/Update-category-form'

import type { createCategorySchema } from '@/app/lib/schemas/create-category-schema'
import type { z } from 'zod'

async function UpdateCategoryPage (
  { params }: { params: { categoryId: string } }
): Promise<React.ReactElement> {
  const { userId } = auth()

  const category = await getCategoryById(parseInt(params.categoryId))

  const defaultValues: z.infer<typeof createCategorySchema> = {
    name: category.name,
    description: category.description,
    petType: category.petType,
    slug: category.slug
  }

  return (
    <main className='flex flex-col gap-7 pt-4 md pb-20 px-5 text-text-100'>
      {
        userId !== null && (
          <>
            <div>
              <h1 className='text-3xl font-bold'>Update Category</h1>
              <p className='text-muted-foreground'>Only change the fields you want to update.</p>
            </div>

            <UpdateCategoryForm
              authId={userId}
              defaultValues={defaultValues}
              categoryId={parseInt(params.categoryId)}
            />
          </>
        )
      }
    </main>
  )
}

export default UpdateCategoryPage
