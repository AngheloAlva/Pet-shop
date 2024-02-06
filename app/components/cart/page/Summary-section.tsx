import type { ProductCart } from '@/types/user/product-cart.types'
import { Card } from '../../ui/card'
import { calculateCartTotals } from '@/app/helpers/calculateCartTotals'

interface SummarySectionProps {
  products: ProductCart[]
  children: React.ReactElement
  shippingCost: number
}

function SummarySection ({
  products, children, shippingCost
}: SummarySectionProps): React.ReactElement {
  const {
    totalDiscount,
    totalPriceAfterDiscount,
    totalPriceBeforeDiscount
  } = calculateCartTotals(products, shippingCost)

  return (
    <section className='flex flex-col gap-2 w-full lg:w-1/3'>
      <h2 className='text-2xl font-bold'>Summary</h2>
      <Card className='py-4 px-6 text-text-200'>
        <div className='flex justify-between font-medium'>
          <p><strong>Subtotal</strong></p>
          <p>${totalPriceBeforeDiscount.toLocaleString()}</p>
        </div>
        <div className='flex justify-between font-medium'>
          <p><strong>Discount</strong></p>
          <p>${totalDiscount.toLocaleString()}</p>
        </div>
        <div className='flex justify-between font-medium'>
          <p><strong>Shipping</strong></p>
          <p>${shippingCost.toLocaleString()}</p>
        </div>
        <div className='flex justify-between font-medium'>
          <p><strong>Total</strong></p>
          <p>${totalPriceAfterDiscount.toLocaleString()}</p>
        </div>
      </Card>

      {children}
    </section>
  )
}

export default SummarySection
