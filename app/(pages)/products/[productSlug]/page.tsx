import ProductData from '@/app/components/products/page/Product-data'
import ProductDataSkeleton from '@/app/components/skeletons/Product-data-skeleton'
import { Suspense } from 'react'

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
