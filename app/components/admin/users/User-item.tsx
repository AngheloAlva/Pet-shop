import type { User } from '@/types/user/user.types'
import { Card } from '../../ui/card'
import { format } from 'date-fns'

function UserItem (
  { user }: { user: User }
): React.ReactElement {
  return (
    <Card className='flex flex-col gap-2 p-5 w-full'>
      <h3 className='text-lg font-bold'>Email: {user.email}</h3>
      <p><strong>Name: </strong>{user.name ?? 'No name'} {user.lastName}</p>
      <p><strong>Phone: </strong>{user.phone ?? 'No phone'}</p>
      <p><strong>RUT: </strong>{user.rut ?? 'No RUT'}</p>
      <p><strong>Role: </strong>{user.role}</p>
      <p><strong>Created at: </strong>{format(user.createdAt, 'PPP')}</p>
    </Card>
  )
}

export default UserItem
