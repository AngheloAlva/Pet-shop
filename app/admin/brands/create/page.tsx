import CreateBrandForm from '@/app/components/admin/forms/brand/Create-brand-form'
import { auth } from '@clerk/nextjs'

function CreateBrandPage (): React.ReactElement {
  const { userId } = auth()

  return (
    <main className='flex flex-col gap-7 pt-4 md pb-20 px-5 text-text-100'>
      {
        userId !== null && (
          <>
            <div>
              <h1 className='text-3xl font-bold'>Create Brand</h1>
              <p className='text-muted-foreground'>All fields are required</p>
            </div>

            <CreateBrandForm authId={userId} />
          </>
        )
      }
    </main>
  )
}

export default CreateBrandPage
