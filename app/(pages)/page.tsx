import { Suspense } from 'react'

import ProductsByBrandSection from '../components/home/page/Products-by-brand-section'
import ProductsCarouselSkeleton from '../components/skeletons/Products-carousel'
import BrandCarouselSkeleton from '../components/skeletons/Brands-carousel'
import ProductsSection from '../components/home/page/Products-section'
import BrandsSection from '../components/home/page/Brands-section'
import BannerSection from '../components/home/page/Banner-section'
import PetsSection from '../components/home/page/Pets-section'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pet shop',
  description: 'A pet shop for all common pets and exotic animals. We have everything you need to take care of your pet, from food to medicine and toys.',
  keywords: 'pet shop, pets, animals, food, medicine, toys, exotic animals, common pets, dogs, cats, birds, fish, reptiles, rodents, rabbits, hamsters, guinea pigs, ferrets, chinchillas, hedgehogs',
  category: 'Shopping',
  robots: 'index, follow',
  themeColor: '#FDFBF6'
}

export default function Home (): React.ReactElement {
  return (
    <main className='flex flex-col gap-10 pb-20 pt-16 md:pt-28'>
      <BannerSection />

      <Suspense fallback={<ProductsCarouselSkeleton />}>
        <ProductsSection />
      </Suspense>

      <PetsSection />

      <Suspense fallback={<ProductsCarouselSkeleton />}>
        <ProductsByBrandSection />
      </Suspense>

      <Suspense fallback={<BrandCarouselSkeleton />}>
        <BrandsSection />
      </Suspense>
    </main>
  )
}
