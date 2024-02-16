import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import AccountButton from './account/Account-button'
import CartButton from './cart/Cart-button'
import SearchButton from './search/Search-button'
import SheetMenu from './sheet/Sheet-menu'
import NavMenu from './nav-menu/Nav-menu'

function Navbar (): React.ReactElement {
  return (
    <header className='bg-bg-100 fixed top-0 left-0 z-50 right-0 shadow-md'>
      <nav className="flex py-2 px-4 md:px-8 lg:px-24 lg:py-4 xl:px-36 items-center justify-between">
        <div className='flex gap-2 items-center md:hidden'>
          <Suspense fallback={<div>Loading...</div>}>
            <SheetMenu />
          </Suspense>

          <SearchButton />
        </div>

        <Link href='/'>
          <Image
            src={'/logo.svg'}
            priority
            alt="logo"
            width={50}
            height={50}
          />
        </Link>

        <div className='hidden md:block'>
          <SearchButton />
        </div>

        <div className='flex items-center gap-2'>
          <AccountButton />
          <CartButton />
        </div>
      </nav>
      <nav className='hidden md:flex items-center w-full justify-center pb-4'>
        <Suspense fallback={<div>Loading...</div>}>
          <NavMenu />
        </Suspense>
      </nav>
    </header>
  )
}

export default Navbar
