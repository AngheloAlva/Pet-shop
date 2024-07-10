import { redirect } from "next/navigation"
import { auth } from "@/auth"

import { CreateBrandForm } from "@/components/admin"

export default async function CreateBrandPage(): Promise<React.ReactElement> {
	const session = await auth()

	if (!session?.user || !session.user.id) redirect("/")

	return (
		<main className="md flex flex-col gap-7 px-5 pb-20 pt-4 text-text-100">
			<div>
				<h1 className="text-3xl font-bold">Create Brand</h1>
				<p className="text-muted-foreground">All fields are required</p>
			</div>

			<CreateBrandForm />
		</main>
	)
}
