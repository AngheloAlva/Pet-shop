import { getProductBySlug } from '@/app/lib/api/shop/product'

import PrimaryInfoSection from '@/app/components/products/product/page/Primary-info-section'
import DescriptionSection from '../product/page/Description-section'
import ImageSection from '../product/page/Image-section'

export default async function ProductData (
  { productSlug }: { productSlug: string }
): Promise<React.ReactElement> {
  const product = await getProductBySlug(productSlug)

  return (
    <>
      <div className='flex flex-col gap-10 md:flex-row'>
        <ImageSection images={product.images} name={product.name} />
        <PrimaryInfoSection product={product} />
      </div>

      <DescriptionSection description={product.description} />
    </>
  )
}
