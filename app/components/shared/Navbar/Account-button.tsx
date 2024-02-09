'use client'

import { useUser } from '@clerk/nextjs'

import IsSignedOut from './Is-signed-out'
import { FaUser } from 'react-icons/fa6'
import IsSignedIn from './Is-signed-in'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/app/components/ui/popover'

function AccountButton (): React.ReactElement {
  const { isSignedIn } = useUser()

  return (
    <Popover>
      <PopoverTrigger className='text-text-200 hover:text-bg-100 hover:bg-cream-500 p-1 rounded-lg transition-colors cursor-pointer'>
        <FaUser className='w-7 h-7 p-[1px]' />
      </PopoverTrigger>
      <PopoverContent className='max-w-52'>
        <div className='flex flex-col items-start gap-2 text-text-100'>
          {
            (isSignedIn ?? false)
              ? <IsSignedIn />
              : <IsSignedOut />
          }
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default AccountButton
