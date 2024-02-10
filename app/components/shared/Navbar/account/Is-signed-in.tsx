import useUserData from '@/app/hooks/useUserData'
import { SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'

import { Separator } from '../../../ui/separator'
import {
  FaArrowRightFromBracket,
  FaIdCardClip,
  FaUserLock
} from 'react-icons/fa6'

function IsSignedIn (
  { userId }: { userId: string | undefined }
): React.ReactElement {
  const { user } = useUserData(userId)

  return (
    <>
      {user?.role === 'ADMIN' && (
        <>
          <Link href={'/admin'} className='w-full flex font-medium items-center cursor-pointer hover:text-blue-400'>
            <FaUserLock className='w-5 h-5' />
            <span className='ml-2'>Admin</span>
          </Link>

          <Separator />
        </>
      )}

      <Link href='/account' className='w-full flex font-medium items-center cursor-pointer hover:text-blue-400'>
        <FaIdCardClip className='w-5 h-5' />
        <span className='ml-2'>Account</span>
      </Link>

      <Separator />

      <SignOutButton>
        <div className='w-full flex font-medium items-center cursor-pointer hover:text-blue-400'>
          <FaArrowRightFromBracket className='w-5 h-5' />
          <span className='ml-2'>Sign Out</span>
        </div>
      </SignOutButton>
    </>
  )
}

export default IsSignedIn
