import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/app/components/ui/sheet'
import { FaBars } from 'react-icons/fa6'
import CategoryList from './Category-list'

function SheetMenu (): React.ReactElement {
  return (
    <Sheet>
      <SheetTrigger className='text-text-100 hover:text-bg-100 hover:bg-primary-100 p-1 rounded-lg transition-colors'>
        <FaBars className='w-7 h-7' />
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>
          <SheetTitle>
            Categories
          </SheetTitle>
        </SheetHeader>

        <CategoryList />
      </SheetContent>
      </Sheet>
  )
}

export default SheetMenu
