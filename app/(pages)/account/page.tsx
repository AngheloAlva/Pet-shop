import { auth } from '@clerk/nextjs'

import AddressForm from '@/app/components/forms/Address-form'
import UserForm from '@/app/components/forms/User-form'
import { Button } from '@/app/components/ui/button'
import Link from 'next/link'
import { getUserById } from '@/app/lib/api/user/user'

async function AccountPage (): Promise<React.ReactElement> {
  const { userId } = auth()

  if (userId == null) {
    return (
      <main className='flex flex-col gap-5 pt-5 pb-20 px-5 sm:px-10 md:px-20 lg:px-40 text-text-100'>
        <h1 className='text-3xl font-bold'>Account</h1>
        <p>You must be logged in to see your account.</p>
      </main>
    )
  }

  const user = await getUserById(userId)

  return (
    <main className='flex flex-col gap-5 pt-5 pb-20 px-5 sm:px-10 md:px-20 lg:px-40 text-text-100'>
      <h1 className='text-3xl font-bold'>Account</h1>

      <Button size={'lg'} className='bg-cream-600 hover:bg-cream-500'>
        <Link href='/account/orders' className='w-full'>
          Go to Orders
        </Link>
      </Button>

      {
        user?.id !== undefined && (
          <section className='flex flex-col gap-4 lg:flex-row w-full'>
            <div className='w-full lg:w-1/2'>
              <h2 className='text-2xl font-bold'>Personal Information</h2>
              <UserForm
                authId={userId}
                user={user}
              />
            </div>

            <div className='w-full lg:w-1/2'>
              <h2 className='text-2xl font-bold'>Address</h2>
              <AddressForm
                authId={userId}
                address={user.address?.[0] ?? null}
                isUpdate={true}
              >
                <Button type='submit' className='bg-blue-400 hover:bg-blue-300'>
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
