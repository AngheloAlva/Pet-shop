import { SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'

import { Separator } from '../../ui/separator'
import {
  FaArrowRightFromBracket,
  FaIdCardClip
} from 'react-icons/fa6'

function IsSignedIn (): React.ReactElement {
  return (
    <>
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
    </>
  )
}

export default IsSignedIn
