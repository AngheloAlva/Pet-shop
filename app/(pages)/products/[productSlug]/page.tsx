import DescriptionSection from '@/app/components/products/product/page/Description-section'
import PrimaryInfoSection from '@/app/components/products/product/page/Primary-info-section'
import ImageSection from '@/app/components/products/product/page/Image-section'
import { getProductBySlug } from '@/app/lib/api/shop/product'

async function ProductPage (
  { params }: { params: { productSlug: string } }
): Promise<React.ReactElement> {
  const product = await getProductBySlug(params.productSlug)

  return (
    <main className='px-5 sm:px-10 md:px-20 pt-10 pb-20 lg:px-40 flex flex-col w-screen gap-10 lg:flex-row'>
      <ImageSection images={product.images} name={product.name} />

      <div>
        <PrimaryInfoSection product={product} />
        <DescriptionSection description={product.description} />
      </div>
    </main>
  )
}

export default ProductPage
