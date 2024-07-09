import UserForm from "@/components/forms/UserForm"
import { User } from "@prisma/client"

interface UserFormProps {
	userId: string
	user: User
	setIsButtonEnabled: (enabled: boolean) => void
}

function UserDataSection({ user, userId, setIsButtonEnabled }: UserFormProps): React.ReactElement {
	return (
		<section>
			<h2 className="mb-2 text-2xl font-bold">Personal Information</h2>

			<UserForm user={user} setIsButtonEnabled={setIsButtonEnabled} />
		</section>
	)
}

export default UserDataSection
