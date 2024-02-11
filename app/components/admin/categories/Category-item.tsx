import type { Category } from '@/types/shop/category.types'
import { format } from 'date-fns'
import { Card } from '../../ui/card'

function AdminCategoryItem (
  { category }: { category: Category }
): React.ReactElement {
  return (
    <Card className='p-5 space-y-3'>
      <div>
        <h3 className='text-xl font-bold'>{category.name}</h3>
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
