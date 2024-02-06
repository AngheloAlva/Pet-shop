import ProductCartItem from '../../shared/Navbar/cart/Product-cart-item'
import { Card } from '../../ui/card'

import type { ProductCart } from '@/types/user/product-cart.types'

interface ResumeSectionProps {
  userId: string
  products: ProductCart[]
  isLoading: boolean
}

function ResumeSection ({
  isLoading, products, userId
}: ResumeSectionProps): React.ReactElement {
  return (
    <section className='flex flex-col gap-2 w-full lg:w-2/3'>
      <h1 className='text-3xl font-bold'>Cart</h1>
      <Card className='flex flex-col gap-5 py-4 px-6 '>
        {isLoading && <p>Loading...</p>}
        {!isLoading && products.length === 0 && <p>Your cart is empty</p>}
        {!isLoading && products.length > 0 && (
          <ul className='flex flex-col gap-5'>
            {products.map((product) => (
              <ProductCartItem authId={userId} productCart={product} key={product.id} />
            ))}
          </ul>
        )}
      </Card>
    </section>
  )
}

export default ResumeSection
