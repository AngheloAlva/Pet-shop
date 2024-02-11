import type { Category } from '@/types/shop/category.types'
import { format } from 'date-fns'
import { Card } from '../../ui/card'
import { Button } from '../../ui/button'
import AlertDeleteCategory from './Alert-delete-category'
import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import AlertRestoreCategory from './Alert-restore-product'

function AdminCategoryItem (
  { category, refresh }: { category: Category, refresh: () => Promise<void> }
): React.ReactElement {
  const { userId } = useAuth()

  return (
    <Card className='p-5 space-y-3'>
      <div className='space-y-3'>
        <div className='flex items-center justify-between'>
          <h3 className='text-xl font-bold'>{category.name}</h3>
          {(userId != null) && (
            category.isAvailable
              ? (<div className='space-x-2'>
                  <Link href={`/admin/categories/update/${category.id}`}>
                    <Button size={'sm'} variant={'outline'}>
                      Edit
                    </Button>
                  </Link>
                  <AlertDeleteCategory
                    categoryId={category.id}
                    authId={userId}
                    refresh={refresh}
                  />
                </div>)
              : <AlertRestoreCategory
                  categoryId={category.id}
                  authId={userId}
                  refresh={refresh}
                />
          )}
        </div>
        <p>{category.description}</p>
      </div>
      <div>
        <p><strong>Pet type: </strong>{category.petType}</p>
        <p><strong>Created at: </strong>{format(category.createdAt, 'PPP')}</p>
      </div>
    </Card>
  )
}

export default AdminCategoryItem
