import { FaUserShield } from 'react-icons/fa6'
import { SignInButton } from '@clerk/nextjs'

function IsSignedOut (): React.ReactElement {
  return (
    <SignInButton afterSignInUrl='/'>
      <div className='w-full flex font-medium items-center cursor-pointer hover:text-primary-100'>
        <FaUserShield className='w-5 h-5' />
        <span className='ml-2'>Sign In</span>
      </div>
    </SignInButton>
  )
}

export default IsSignedOut
