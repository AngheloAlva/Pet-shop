import { Card } from "../../ui/card"
import { format } from "date-fns"

import type { User } from "@prisma/client"

function UserItem({ user }: { user: User }): React.ReactElement {
	return (
		<Card className="flex w-full flex-col gap-2 p-5">
			<h3 className="text-lg font-bold">Email: {user.email}</h3>
			<p>
				<strong>Name: </strong>
				{user.name ?? "No name"} {user.lastName}
			</p>
			<p>
				<strong>RUT: </strong>
				{user.rut ?? "No RUT"}
			</p>
			<p>
				<strong>Role: </strong>
				{user.role}
			</p>
			<p>
				<strong>Created at: </strong>
				{format(user.createdAt, "PPP")}
			</p>
		</Card>
	)
}

export default UserItem
