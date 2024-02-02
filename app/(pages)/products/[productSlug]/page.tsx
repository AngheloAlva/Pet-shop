'use client'

import DescriptionSection from '@/app/components/products/product/page/Description-section'
import ImageSection from '@/app/components/products/product/page/Image-section'
import PrimaryInfoSection from '@/app/components/products/product/page/Primary-info-section'
import useProductBySlug from '@/app/hooks/useProductBySlug'

function ProductPage (
  { params }: { params: { productSlug: string } }
): React.ReactElement {
  const { product, isLoading } = useProductBySlug(params.productSlug)

  return (
    <main className='px-5 sm:px-10 md:px-20 pt-10 pb-20 lg:px-40 flex flex-col w-screen gap-10 lg:flex-row'>
      {
        isLoading
          ? <p>Loading...</p>
          : (<>
              <ImageSection images={product.images} name={product.name} />
              <PrimaryInfoSection product={product} />
              <DescriptionSection description={product.description} />
            </>)
      }
    </main>
  )
}

export default ProductPage
