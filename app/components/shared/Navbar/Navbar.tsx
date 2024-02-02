import Image from 'next/image'
import Link from 'next/link'

import SearchButton from './Search-button'
import CartButton from './Cart-button'
import SheetMenu from './Sheet-menu'
import AccountButton from './Account-button'

function Navbar (): React.ReactElement {
  return (
    <header className='bg-bg-100'>
      <nav className="flex py-2 px-4 items-center justify-between">
        <div className='flex gap-2 items-center'>
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

        <div className='flex items-center gap-2'>
          <AccountButton />
          <CartButton />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
