import DescriptionSection from '@/app/components/products/product/page/Description-section'
import PrimaryInfoSection from '@/app/components/products/product/page/Primary-info-section'
import ImageSection from '@/app/components/products/product/page/Image-section'
import { getProductBySlug } from '@/app/lib/api/shop/product'

async function ProductPage (
  { params }: { params: { productSlug: string } }
): Promise<React.ReactElement> {
  const product = await getProductBySlug(params.productSlug)

  return (
    <main className='px-5 sm:px-10 md:px-20 pt-10 pb-20 lg:px-40 w-screen space-y-14'>
      <div className='flex flex-col gap-10 md:flex-row'>
        <ImageSection images={product.images} name={product.name} />
        <PrimaryInfoSection product={product} />
      </div>

      <DescriptionSection description={product.description} />
    </main>
  )
}

export default ProductPage
