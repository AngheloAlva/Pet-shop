/* eslint-disable @typescript-eslint/no-misused-promises */

'use client'

import { createCheckoutSession } from '@/app/lib/api/shop/payment'
import { useUser } from '@clerk/nextjs'
import { useState } from 'react'

import { Button } from '@/app/components/ui/button'
import type { ShippingMethod } from '@/types/shop/payment.types'
import ShippingMethodSelect from '@/app/components/cart/ui/Shipping-method-select'
import { shippingMethods } from '@/app/lib/consts'
import { useCartStore } from '@/app/store/cart-store'

function PaymentPage (): React.ReactElement {
  const { user } = useUser()
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
      <ShippingMethodSelect onChange={handleShippingMethod} shippingMethod={shippingMethod.method} />

      <Button
        size={'lg'}
        onClick={handlePay}
        className='w-full bg-primary-200 hover:bg-primary-100 mt-5'
      >
        Pay
      </Button>
    </main>
  )
}

export default PaymentPage
