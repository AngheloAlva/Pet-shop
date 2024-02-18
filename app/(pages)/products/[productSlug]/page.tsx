import { getProductBySlug } from '@/app/lib/api/shop/product'

import ProductDataSkeleton from '@/app/components/skeletons/Product-data-skeleton'
import ProductData from '@/app/components/products/page/Product-data'
import { Suspense } from 'react'

import type { Metadata } from 'next'

export async function generateMetadata ({ params }: { params: { productSlug: string } }): Promise<Metadata> {
  const { name, brand, category, lifeStage, petType } = await getProductBySlug(params.productSlug)

  return {
    title: name,
    description: `Buy ${name} from ${brand?.name} of ${category?.name} for your ${lifeStage} ${petType[0]} at PetStore.`
  }
}

async function ProductPage (
  { params }: { params: { productSlug: string } }
): Promise<React.ReactElement> {
  return (
    <main className='px-5 sm:px-10 md:px-20 pb-20 lg:px-40 w-screen space-y-14 pt-28 md:pt-40'>
      <Suspense fallback={<ProductDataSkeleton />}>
        <ProductData productSlug={params.productSlug} />
      </Suspense>
    </main>
  )
}

export default ProductPage
