import UserForm from "@/components/forms/UserForm"
import { User } from "@prisma/client"

interface UserFormProps {
	authId: string
	user: User | null
	setIsButtonEnabled: (enabled: boolean) => void
}

function UserDataSection({ user, authId, setIsButtonEnabled }: UserFormProps): React.ReactElement {
	return (
		<section>
			<h2 className="mb-2 text-2xl font-bold">Personal Information</h2>

			<UserForm user={user} authId={authId} setIsButtonEnabled={setIsButtonEnabled} />
		</section>
	)
}

export default UserDataSection
