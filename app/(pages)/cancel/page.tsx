import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/app/components/ui/button'

function CancelPage (): React.ReactElement {
  return (
    <main className='flex flex-col gap-10 pt-28 md:pt-40 pb-20 px-5 sm:px-10 md:px-20 lg:px-56 xl:px-72 text-text-100 md:flex-row-reverse justify-center items-center'>
      <div className='w-full'>
        <h1 className='text-4xl font-bold text-red-800'>Cancel</h1>
        <p className='text-lg'>Your payment has been cancelled.</p>

        <Link href='/' className='w-full'>
          <Button className='w-full bg-blue-400 hover:bg-blue-300 mt-5 md:mt-10' size={'lg'}>
            Go back to home
          </Button>
        </Link>
      </div>

      <Image
        alt='Cancel'
        width={700}
        height={700}
        src='/errors/cancel.png'
        className='max-w-md w-full'
      />
    </main>
  )
}

export default CancelPage
