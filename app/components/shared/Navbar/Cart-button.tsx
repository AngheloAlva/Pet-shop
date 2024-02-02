import { FaBasketShopping } from 'react-icons/fa6'
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger
} from '@/app/components/ui/popover'

function CartButton (): React.ReactElement {
  return (
    <Popover>
      <PopoverTrigger className='text-text-100 hover:text-bg-100 hover:bg-primary-100 p-1 rounded-lg transition-colors cursor-pointer'>
        <FaBasketShopping className='w-7 h-7' />
      </PopoverTrigger>
      <PopoverContent>
        <div className='flex flex-col gap-2 p-4'>
          <p>Your cart is empty</p>
          <PopoverClose className='bg-primary-100 text-bg-100 p-2 rounded-lg hover:bg-primary-200 transition-colors'>
            Go to shop
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default CartButton
