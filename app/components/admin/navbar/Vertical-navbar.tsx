'use client'

import { usePathname } from 'next/navigation'

import { FaBoxesStacked, FaCartFlatbed, FaCopyright, FaHouse, FaList, FaUsers } from 'react-icons/fa6'
import LinkItem from './Link-item'

function VerticalAdminNavbar (): React.ReactElement {
  const pathName = usePathname()

  return (
    <div className="flex-1 overflow-auto py-2 hidden md:block min-w-40 max-w-52">
      <nav className="grid items-start px-4 text-sm font-medium">
        <LinkItem href='/admin' icon={<FaHouse className='w-4 h-4' />} pathName={pathName} text='Home' />
        <LinkItem href='/admin/products' icon={<FaBoxesStacked className='w-4 h-4' />} pathName={pathName} text='Products' />
        <LinkItem href='/admin/categories' icon={<FaList className='w-4 h-4' />} pathName={pathName} text='Categories' />
        <LinkItem href='/admin/brands' icon={<FaCopyright className='w-4 h-4' />} pathName={pathName} text='Brand' />
        <LinkItem href='/admin/orders' icon={<FaCartFlatbed className='w-4 h-4' />} pathName={pathName} text='Orders' />
        <LinkItem href='/admin/users' icon={<FaUsers className='w-4 h-4' />} pathName={pathName} text='Users' />
      </nav>
    </div>
  )
}

export default VerticalAdminNavbar
