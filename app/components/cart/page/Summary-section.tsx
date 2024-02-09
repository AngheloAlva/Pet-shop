import type { ProductCart } from '@/types/user/product-cart.types'
import { Card } from '../../ui/card'
import { calculateCartTotals } from '@/app/helpers/calculateCartTotals'
import { cn } from '@/app/lib/utils'

interface SummarySectionProps {
  products: ProductCart[]
  shippingCost?: number
  className?: string
}

function SummarySection ({
  products, className, shippingCost = 0
}: SummarySectionProps): React.ReactElement {
  const {
    totalDiscount,
    totalPriceAfterDiscount,
    totalPriceBeforeDiscount
  } = calculateCartTotals(products, shippingCost ?? 0)

  return (
    <section className={cn('flex flex-col gap-2 w-full lg:w-1/3', className)}>
      <h2 className='text-2xl font-bold'>Summary</h2>
      <Card className='py-4 px-6 text-text-200'>
        <div className='flex justify-between font-medium'>
          <p><strong>Subtotal</strong></p>
          <p>{totalPriceBeforeDiscount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
        </div>
        <div className='flex justify-between font-medium'>
          <p><strong>Discount</strong></p>
          <p>{totalDiscount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
        </div>
        <div className='flex justify-between font-medium'>
          <p><strong>Shipping</strong></p>
          <p>{shippingCost.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
        </div>
        <div className='flex justify-between font-medium'>
          <p><strong>Total</strong></p>
          <p>{totalPriceAfterDiscount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
        </div>
      </Card>
    </section>
  )
}

export default SummarySection
