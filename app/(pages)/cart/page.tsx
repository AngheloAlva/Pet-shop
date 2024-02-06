'use client'

import { createCheckoutSession } from '@/app/lib/api/shop/payment'
import useCheckoutCart from '@/app/hooks/useCheckoutCart'
import { useCartStore } from '@/app/store/cart-store'
import { shippingMethods } from '@/app/lib/consts'
import { useUser } from '@clerk/nextjs'
import { useState } from 'react'

import ShippingMethodSelect from '@/app/components/cart/ui/Shipping-method-select'
import SummarySection from '@/app/components/cart/page/Summary-section'
import ResumeSection from '@/app/components/cart/page/Resume-section'
import { Button } from '@/app/components/ui/button'

import type { ShippingMethod } from '@/types/shop/payment.types'

function CartPage (): React.ReactElement {
  const { user } = useUser()
  const { isLoading } = useCheckoutCart(user?.id)
  const { products } = useCartStore()
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>({
    method: 'SHOP_PICKUP',
    price: 0
  })

  const handlePay = async (): Promise<void> => {
    if (user === null || user === undefined) return

    try {
      await createCheckoutSession({
        shippingMethod: shippingMethod.method,
        productsCart: products,
        authId: user.id
      })
    } catch (error) {
      console.log('Error creating checkout session', error)
    }
  }

  const handleShippingMethod = (method: ShippingMethod['method']): void => {
    const price = shippingMethods.find((m) => m[method])?.[method] ?? 0

    setShippingMethod({
      method,
      price
    })
  }

  return (
    <main className='px-5 sm:px-10 text-text-100 md:px-20 pt-10 lg:px-34 xl:px-44 2xl:px-60 pb-20 flex flex-col w-screen gap-10 lg:flex-row'>
      <ResumeSection
        products={products}
        isLoading={isLoading}
        userId={user?.id ?? ''}
      />

      <SummarySection products={products} shippingCost={shippingMethod.price}>
        <>
          <ShippingMethodSelect onChange={handleShippingMethod} shippingMethod={shippingMethod.method} />

          <Button
            size={'lg'}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={handlePay}
            className='w-full bg-primary-200 hover:bg-primary-100 mt-5'
          >
            Pay
          </Button>
        </>
      </SummarySection>
    </main>
  )
}

export default CartPage
