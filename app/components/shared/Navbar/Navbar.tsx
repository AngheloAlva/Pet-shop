import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import AccountButton from './Account-button'
import CartButton from './cart/Cart-button'
import SearchButton from './Search-button'
import SheetMenu from './sheet/Sheet-menu'
import NavMenu from './nav-menu/Nav-menu'

function Navbar (): React.ReactElement {
  return (
    <header className='bg-bg-100'>
      <nav className="flex py-2 px-4 items-center justify-between">
        <div className='flex gap-2 items-center md:hidden'>
          <Suspense fallback={<div>Loading...</div>}>
            <SheetMenu />
          </Suspense>

          <SearchButton />
        </div>

        <Link href='/'>
          <Image
            src={'/images/logo.svg'}
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
      <nav className='hidden md:flex items-center w-full justify-center'>
        <Suspense fallback={<div>Loading...</div>}>
          <NavMenu />
        </Suspense>
      </nav>
    </header>
  )
}

export default Navbar
