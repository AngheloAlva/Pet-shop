import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/app/components/ui/sheet'
import { FaBars } from 'react-icons/fa6'

function SheetMenu (): React.ReactElement {
  return (
    <Sheet>
      <SheetTrigger className='text-text-100 hover:text-bg-100 hover:bg-primary-100 p-1 rounded-lg transition-colors'>
        <FaBars className='w-7 h-7' />
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
      </Sheet>
  )
}

export default SheetMenu
