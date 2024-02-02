'use client'

import { FaUser, FaUserShield, FaArrowRightFromBracket, FaIdCardClip } from 'react-icons/fa6'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/app/components/ui/popover'
import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs'
import { Separator } from '../../ui/separator'
import Link from 'next/link'

function AccountButton (): React.ReactElement {
  const { user, isSignedIn } = useUser()
  console.log(user)

  return (
    <Popover>
      <PopoverTrigger className='text-text-100 hover:text-bg-100 hover:bg-primary-100 p-1 rounded-lg transition-colors cursor-pointer'>
        <FaUser className='w-7 h-7 p-[1px]' />
      </PopoverTrigger>
      <PopoverContent className='max-w-52'>
        <div className='flex flex-col items-start gap-2 text-text-100'>
          {
            (isSignedIn ?? false)
              ? (<>
                <Link href='/account' className='w-full flex font-medium items-center cursor-pointer hover:text-primary-100'>
                  <FaIdCardClip className='w-5 h-5' />
                  <span className='ml-2'>Account</span>
                </Link>

                <Separator />

                <SignOutButton>
                  <div className='w-full flex font-medium items-center cursor-pointer hover:text-primary-100'>
                    <FaArrowRightFromBracket className='w-5 h-5' />
                    <span className='ml-2'>Sign Out</span>
                  </div>
                </SignOutButton>
              </>)
              : (
                <SignInButton afterSignInUrl='/'>
                  <div className='w-full flex font-medium items-center cursor-pointer hover:text-primary-100'>
                    <FaUserShield className='w-5 h-5' />
                    <span className='ml-2'>Sign In</span>
                  </div>
                </SignInButton>
                )
          }
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default AccountButton
