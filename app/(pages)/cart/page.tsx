'use client'

import { calculateCartTotals } from '@/app/helpers/calculateCartTotals'
import useCheckoutCart from '@/app/hooks/useCheckoutCart'
import { useCartStore } from '@/app/store/cart-store'
import { useUser } from '@clerk/nextjs'

import SummarySection from '@/app/components/cart/page/Summary-section'
import ResumeSection from '@/app/components/cart/page/Resume-section'

function CartPage (): React.ReactElement {
  const { user } = useUser()
  const { isLoading } = useCheckoutCart(user?.id)
  const { products } = useCartStore()

  const {
    totalDiscount,
    totalPriceAfterDiscount,
    totalPriceBeforeDiscount
  } = calculateCartTotals(products)

  return (
    <main className='px-5 sm:px-10 text-text-100 md:px-20 pt-10 lg:px-34 xl:px-44 2xl:px-60 pb-20 flex flex-col w-screen gap-10 lg:flex-row'>
      <ResumeSection
        products={products}
        isLoading={isLoading}
        userId={user?.id ?? ''}
      />

      <SummarySection
        totalDiscount={totalDiscount}
        totalPriceAfterDiscount={totalPriceAfterDiscount}
        totalPriceBeforeDiscount={totalPriceBeforeDiscount}
      />
    </main>
  )
}

export default CartPage
