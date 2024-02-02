import BrandsSection from '../components/home/page/Brands-section'
import PetsSection from '../components/home/page/Pets-section'
import ProductsSection from '../components/home/page/Products-section'

export default function Home (): React.ReactElement {
  return (
    <main className='flex flex-col gap-10 pt-10 pb-20'>
      {/* <ProductsSection /> */}
      <PetsSection />
      {/* <BrandsSection /> */}
    </main>
  )
}
