import UserForm from "@/components/forms/UserForm"

import type { User } from "@prisma/client"

interface UserFormProps {
	user: User
}

function UserDataSection({ user }: UserFormProps): React.ReactElement {
	return (
		<section>
			<h2 className="mb-2 text-2xl font-bold">Personal Information</h2>

			<UserForm user={user} />
		</section>
	)
}

export default UserDataSection
