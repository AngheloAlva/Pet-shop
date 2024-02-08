'use client'

import useUserData from '@/app/hooks/useUserData'
import { useUser } from '@clerk/nextjs'

import AddressForm from '@/app/components/forms/Address-form'
import UserForm from '@/app/components/forms/User-form'
import { Button } from '@/app/components/ui/button'
import Link from 'next/link'

function AccountPage (): React.ReactElement {
  const { user } = useUser()
  const { user: userDb, refetchUser } = useUserData(user?.id)

  return (
    <main className='flex flex-col gap-5 pt-5 pb-20 px-5 sm:px-10 md:px-20 lg:px-40 text-text-100'>
      <h1 className='text-3xl font-bold'>Account</h1>

        <Button size={'lg'}>
          <Link href='/account/orders'>
            Go to Orders
          </Link>
        </Button>

      {
        user?.id !== undefined && (
          <section className='flex flex-col gap-4 lg:flex-row w-full'>
            <div className='w-full lg:w-1/2'>
              <h2 className='text-2xl font-bold'>Personal Information</h2>
              <UserForm authId={user?.id} setIsButtonEnabled={() => {}} user={userDb} />
            </div>
            <div className='w-full lg:w-1/2'>
              <h2 className='text-2xl font-bold'>Address</h2>
              <AddressForm
                authId={user.id}
                refetchUser={refetchUser}
                address={userDb?.address?.[0] ?? null}
                setIsButtonEnabled={() => {}} isUpdate={true}
              >
                <Button type='submit'>
                  Update
                </Button>
              </AddressForm>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default AccountPage
