import { getProductById } from '@/app/lib/api/shop/product'
import { auth } from '@clerk/nextjs'

import UpdateProductForm from '@/app/components/admin/forms/product/Update-product-form'

import type { createProductSchema } from '@/app/lib/schemas/create-product-schema'
import type { z } from 'zod'

async function UpdateProductPage (
  { params }: { params: { productId: string } }
): Promise<React.ReactElement> {
  const { userId } = auth()

  const product = await getProductById(parseInt(params.productId))

  const defaultValues: z.infer<typeof createProductSchema> = {
    name: product.name,
    miniDesc: product.miniDesc,
    slug: product.slug,
    description: JSON.parse(product.description),
    petType: product.petType[0],
    lifeStage: product.lifeStage,
    categoryId: product?.category?.id.toString() ?? '',
    brandId: product?.brand?.id.toString() ?? '',
    options: product.options.map(option => ({
      name: option.name,
      price: option.price,
      stock: option.stock,
      discount: option.discount
    }))
  }

  return (
    <main className='flex flex-col gap-7 pt-4 md pb-20 px-5 text-text-100'>
      {
        userId !== null && (
          <>
            <div>
              <h1 className='text-3xl font-bold'>Update Product</h1>
              <p className='text-muted-foreground'>Only change the fields you want to update.</p>
            </div>
            <UpdateProductForm authId={userId} defaultValues={defaultValues} productId={product.id} />
          </>
        )
      }
    </main>
  )
}

export default UpdateProductPage
