import { FaUser } from 'react-icons/fa6'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/app/components/ui/popover'

function AccountButton (): React.ReactElement {
  return (
    <Popover>
      <PopoverTrigger className='text-text-100 hover:text-bg-100 hover:bg-primary-100 p-1 rounded-lg transition-colors cursor-pointer'>
        <FaUser className='w-7 h-7 p-[1px]' />
      </PopoverTrigger>
      <PopoverContent>
        <div className='flex flex-col gap-2 p-4'>
          <p>Your cart is empty</p>
          <button className='bg-primary-100 text-text-100 p-2 rounded-lg hover:bg-primary-200 transition-colors'>
            Go to shop
          </button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default AccountButton
