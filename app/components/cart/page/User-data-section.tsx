import type { User } from '@/types/user/user.types'
import UserForm from '../../forms/User-form'

interface UserFormProps {
  user: User | null
  authId: string
  setIsButtonEnabled: (enabled: boolean) => void
}

function UserDataSection (
  { user, authId, setIsButtonEnabled }: UserFormProps
): React.ReactElement {
  return (
    <section>
      <h2 className='text-2xl font-bold mb-2'>Personal Information</h2>
      <UserForm user={user} authId={authId} setIsButtonEnabled={setIsButtonEnabled} />
    </section>
  )
}

export default UserDataSection
