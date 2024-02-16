import Image from 'next/image'
import Link from 'next/link'
import { Button } from './components/ui/button'

function NotFound (): React.ReactElement {
  return (
    <main className='flex flex-col gap-7 pt-28 md:pt-40 pb-20 px-5 sm:px-10 md:px-20 lg:px-56 xl:px-72 text-text-100 items-center justify-center md:flex-row'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-3xl text-blue-300 font-extrabold'>
          Oops
        </h2>

        <p className='text-2xl'>
          We can't find the page, that you are looking for.
        </p>

        <Link href='/' className='w-full'>
          <Button variant={'default'} size={'lg'} className='w-full bg-blue-300 hover:bg-blue-400 mt-5'>
            Go back to home
          </Button>
        </Link>
      </div>

      <Image
        src='/errors/not-found.svg'
        alt='Not found illustration'
        className='md:w-1/2 md:h-auto'
        width={700}
        height={700}
      />
    </main>
  )
}

export default NotFound
