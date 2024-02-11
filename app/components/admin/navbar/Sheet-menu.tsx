'use client'

import { usePathname } from 'next/navigation'

import LinkItem from './Link-item'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '../../ui/sheet'
import {
  FaBars,
  FaBoxesStacked,
  FaCartFlatbed,
  FaCopyright,
  FaHouse,
  FaList,
  FaUsers
} from 'react-icons/fa6'

function AdminSheetMenu (): React.ReactElement {
  const pathName = usePathname()

  return (
    <Sheet>
      <SheetTrigger className='text-text-200 hover:text-bg-100 hover:bg-gray-400 p-1 rounded-lg transition-colors md:hidden'>
        <FaBars className='w-7 h-7' />
      </SheetTrigger>
      <SheetContent side={'right'}>
        <SheetHeader>
          <SheetTitle>
            Admin Menu
          </SheetTitle>
        </SheetHeader>

        <div className='flex flex-col gap-2 text-text-100 mt-10'>
          <LinkItem href='/admin' icon={<FaHouse className='w-4 h-4' />} pathName={pathName} text='Home' />
          <LinkItem href='/admin/products' icon={<FaBoxesStacked className='w-4 h-4' />} pathName={pathName} text='Products' />
          <LinkItem href='/admin/categories' icon={<FaList className='w-4 h-4' />} pathName={pathName} text='Categories' />
          <LinkItem href='/admin/brands' icon={<FaCopyright className='w-4 h-4' />} pathName={pathName} text='Brand' />
          <LinkItem href='/admin/orders' icon={<FaCartFlatbed className='w-4 h-4' />} pathName={pathName} text='Orders' />
          <LinkItem href='/admin/users' icon={<FaUsers className='w-4 h-4' />} pathName={pathName} text='Users' />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default AdminSheetMenu
