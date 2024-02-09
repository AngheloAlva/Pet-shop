import { Suspense } from 'react'

import OrderInfo from '@/app/components/successful/Order-info'
import Image from 'next/image'
import OrderInfoSkeleton from '@/app/components/skeletons/Order-info-skeleton'

function SuccessfulPage (
  { params }: { params: { orderId: string } }
): React.ReactElement {
  return (
    <main className='flex flex-col gap-7 pt-28 md:pt-40 pb-20 px-5 sm:px-10 md:px-20 lg:px-56 xl:px-72 text-text-100'>
      <h1 className="text-blue-300 text-3xl font-extrabold">
        Thank you for your order!
      </h1>

      <div className='md:flex-row gap-8 flex-col flex items-center md:items-start'>
        <Image
          width={700}
          height={700}
          alt="Order successful"
          className='md:w-1/2 md:h-1/2 max-w-lg w-full'
          src="/images/successful.png"
        />

        <Suspense fallback={<OrderInfoSkeleton />}>
          <OrderInfo orderId={Number(params.orderId)} />
        </Suspense>
      </div>
    </main>
  )
}

export default SuccessfulPage
