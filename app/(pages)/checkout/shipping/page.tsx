/* eslint-disable @typescript-eslint/no-misused-promises */

'use client'

import { createCheckoutSession } from '@/app/lib/api/shop/payment'
import useAddressData from '@/app/hooks/useAddressData'
import { useCartStore } from '@/app/store/cart-store'
import { shippingMethods } from '@/app/lib/consts'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'

import ShippingMethodSelect from '@/app/components/cart/ui/Shipping-method-select'
import AddressSection from '@/app/components/cart/shipping/Address-section'
import SummarySection from '@/app/components/cart/page/Summary-section'
import { Button } from '@/app/components/ui/button'

import type { ShippingMethod } from '@/types/shop/payment.types'
import { useState } from 'react'
import useShippingButton from '@/app/hooks/useShippingButton'

function PaymentPage (): React.ReactElement {
  const { user } = useUser()
  const router = useRouter()
  const { products } = useCartStore()
  const { user: userDb, refetchUser } = useAddressData(user?.id ?? '')
  const { isButtonEnabled, setIsButtonEnabled } = useShippingButton(userDb)

  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>({
    method: 'SHOP_PICKUP',
    price: 0
  })

  const handlePay = async (): Promise<void> => {
    if (user === null || user === undefined) return

    try {
      const url = await createCheckoutSession({
        shippingMethod: shippingMethod.method,
        authId: user.id
      })

      router.push(url)
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
    <main className='px-5 sm:px-10 text-text-100 md:px-20 pt-10 lg:px-34 xl:px-44 2xl:px-60 pb-20 flex flex-col w-screen gap-10'>
      <AddressSection
        userId={user?.id ?? ''}
        address={userDb?.address?.[0] ?? null}
        refetchUser={refetchUser}
        setIsButtonEnabled={setIsButtonEnabled}
      />

      <div>
        <h2 className='text-2xl font-bold'>Shipping method</h2>
        <ShippingMethodSelect onChange={handleShippingMethod} shippingMethod={shippingMethod.method} />
      </div>

      <SummarySection products={products} shippingCost={shippingMethod.price} />

      <Button
        size={'lg'}
        onClick={handlePay}
        disabled={!isButtonEnabled}
        className='w-full bg-primary-200 hover:bg-primary-100 mt-5'
      >
        Pay
      </Button>
    </main>
  )
}

export default PaymentPage
