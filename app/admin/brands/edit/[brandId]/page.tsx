import { getBrandById } from '@/app/lib/api/shop/brand'
import { auth } from '@clerk/nextjs'

import UpdateBrandForm from '@/app/components/admin/forms/brand/Update-brand-form'

import type { createBrandSchema } from '@/app/lib/schemas/create-brand-schema'
import type { z } from 'zod'

async function UpdateBrandPage (
  { params }: { params: { brandId: string } }
): Promise<React.ReactElement> {
  const { userId } = auth()

  const brand = await getBrandById(parseInt(params.brandId))

  const defaultValues: z.infer<typeof createBrandSchema> = {
    name: brand.name,
    slug: brand.slug
  }

  return (
    <main className='flex flex-col gap-7 pt-4 md pb-20 px-5 text-text-100'>
      {
        userId !== null && (
          <>
            <div>
              <h1 className='text-3xl font-bold'>Update Brand</h1>
              <p className='text-muted-foreground'>Only change the fields you want to update.</p>
            </div>

            <UpdateBrandForm
              authId={userId}
              defaultValues={defaultValues}
              brandId={parseInt(params.brandId)}
            />
          </>
        )
      }
    </main>
  )
}

export default UpdateBrandPage
