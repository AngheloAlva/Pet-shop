/* eslint-disable @typescript-eslint/no-misused-promises */

'use client'

import { createCheckoutSession } from '@/app/lib/api/shop/payment'
import useShippingButton from '@/app/hooks/useShippingButton'
import useAddressData from '@/app/hooks/useAddressData'
import { useCartStore } from '@/app/store/cart-store'
import { shippingMethods } from '@/app/lib/consts'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import { useState } from 'react'

import ShippingMethodSelect from '@/app/components/cart/ui/Shipping-method-select'
import AddressSection from '@/app/components/cart/shipping/Address-section'
import SummarySection from '@/app/components/cart/page/Summary-section'
import { Button } from '@/app/components/ui/button'

import type { ShippingMethod } from '@/types/shop/payment.types'

function PaymentPage (): React.ReactElement {
  const { user } = useUser()
  const router = useRouter()
  const { products } = useCartStore()
  const { user: userDb, refetchUser } = useAddressData(user?.id ?? '')
  const { isButtonEnabled, setIsButtonEnabled } = useShippingButton(userDb, products)
  const [isButtonLoading, setIsButtonLoading] = useState(false)

  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>({
    method: 'SHOP_PICKUP',
    price: 0
  })

  const handlePay = async (): Promise<void> => {
    if (user === null || user === undefined) return

    try {
      setIsButtonLoading(true)
      setIsButtonEnabled(false)

      await new Promise((resolve) => setTimeout(resolve, 1000))

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
        {
          isButtonLoading
            ? <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
            : 'Pay'
        }
      </Button>
    </main>
  )
}

export default PaymentPage
