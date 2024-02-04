import Image from 'next/image'
import Link from 'next/link'

import SearchButton from './Search-button'
import CartButton from './Cart-button'
import SheetMenu from './sheet/Sheet-menu'
import AccountButton from './Account-button'
import NavMenu from './nav-menu/Nav-menu'

function Navbar (): React.ReactElement {
  return (
    <header className='bg-bg-100'>
      <nav className="flex py-2 px-4 items-center justify-between">
        <div className='flex gap-2 items-center md:hidden'>
          <SheetMenu />
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
        <NavMenu />
      </nav>
    </header>
  )
}

export default Navbar
