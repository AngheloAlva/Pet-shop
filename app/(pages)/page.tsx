import { Suspense } from 'react'

import ProductsCarouselSkeleton from '../components/skeletons/Products-carousel'
import BrandCarouselSkeleton from '../components/skeletons/Brands-carousel'
import ProductsSection from '../components/home/page/Products-section'
import BrandsSection from '../components/home/page/Brands-section'
import PetsSection from '../components/home/page/Pets-section'
import BannerSection from '../components/home/page/Banner-section'

export default function Home (): React.ReactElement {
  return (
    <main className='flex flex-col gap-10 pb-20 pt-16 md:pt-28'>
      <BannerSection />

      <Suspense fallback={<ProductsCarouselSkeleton />}>
        <ProductsSection />
      </Suspense>

      <PetsSection />

      <Suspense fallback={<BrandCarouselSkeleton />}>
        <BrandsSection />
      </Suspense>
    </main>
  )
}
