import Link from 'next/link'
import { Card } from '../../ui/card'
import { Button } from '../../ui/button'

interface SummarySectionProps {
  totalDiscount: number
  totalPriceAfterDiscount: number
  totalPriceBeforeDiscount: number
}

function SummarySection ({
  totalDiscount, totalPriceAfterDiscount, totalPriceBeforeDiscount
}: SummarySectionProps): React.ReactElement {
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
          <p><strong>Total</strong></p>
          <p>${totalPriceAfterDiscount.toLocaleString()}</p>
        </div>
      </Card>

      <Link href='/cart/checkout' className='w-full mt-5'>
        <Button size={'lg'} className='w-full bg-primary-200 hover:bg-primary-100'>
          Checkout
        </Button>
      </Link>
    </section>
  )
}

export default SummarySection
