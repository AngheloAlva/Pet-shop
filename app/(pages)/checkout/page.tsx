'use client'

import useCartButtonValidation from '@/app/hooks/shop/useCartButtonValidation'
import useCheckoutCart from '@/app/hooks/user/useCheckoutCart'
import { useCartStore } from '@/app/store/cart-store'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'

import UserDataSection from '@/app/components/cart/page/User-data-section'
import SummarySection from '@/app/components/cart/page/Summary-section'
import ResumeSection from '@/app/components/cart/page/Resume-section'
import { Button } from '@/app/components/ui/button'

function CartPage (): React.ReactElement {
  const { user } = useUser()
  const { products } = useCartStore()
  const { isLoading, user: userDb } = useCheckoutCart(user?.id)
  const { isButtonEnabled, setIsButtonEnabled } = useCartButtonValidation(userDb, products)

  return (
    <main className='px-5 sm:px-10 pt-28 md:pt-40 text-text-100 md:px-20 lg:px-34 xl:px-44 2xl:px-60 pb-20 flex flex-col w-screen gap-10'>
      <div className='flex flex-col gap-10 lg:flex-row'>
        <ResumeSection
          products={products}
          isLoading={isLoading}
          userId={user?.id ?? ''}
        />

        <SummarySection products={products} />
      </div>

      <UserDataSection
        user={userDb}
        isLoading={isLoading}
        authId={user?.id ?? ''}
        setIsButtonEnabled={setIsButtonEnabled}
      />

      <div>
        <Button
          size={'lg'}
          disabled={!isButtonEnabled}
          className='w-full bg-green-600 hover:bg-green-500 mt-5 p-0'
        >
          <Link href='/checkout/shipping' className='w-full h-full flex items-center justify-center'>
            Go to shipping
          </Link>
        </Button>
        {
          isButtonEnabled
            ? null
            : <p className='text-sm text-text-200 text-center'>
                Fill in your personal information to continue
              </p>
        }
      </div>
    </main>
  )
}

export default CartPage
