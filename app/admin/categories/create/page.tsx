import CreateCategoryForm from '@/app/components/admin/forms/category/Create-category-form'
import { auth } from '@clerk/nextjs'

function CreateCategoryPage (): React.ReactElement {
  const { userId } = auth()

  return (
    <main className='flex flex-col gap-7 pt-4 md pb-20 px-5 text-text-100'>
      {
        userId !== null && (
          <>
            <div>
              <h1 className='text-3xl font-bold'>Create Category</h1>
              <p className='text-muted-foreground'>All fields are required</p>
            </div>

            <CreateCategoryForm authId={userId} />
          </>
        )
      }
    </main>
  )
}

export default CreateCategoryPage
