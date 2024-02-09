import UserFormSkeleton from '../../skeletons/User-form-skeleton'
import UserForm from '../../forms/User-form'

import type { User } from '@/types/user/user.types'

interface UserFormProps {
  authId: string
  user: User | null
  isLoading: boolean
  setIsButtonEnabled: (enabled: boolean) => void
}

function UserDataSection (
  { user, authId, setIsButtonEnabled, isLoading }: UserFormProps
): React.ReactElement {
  return (
    <section>
      <h2 className='text-2xl font-bold mb-2'>Personal Information</h2>

      {
        isLoading
          ? <UserFormSkeleton />
          : <UserForm user={user} authId={authId} setIsButtonEnabled={setIsButtonEnabled} />
      }
    </section>
  )
}

export default UserDataSection
