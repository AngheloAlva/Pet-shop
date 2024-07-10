import Link from "next/link"
import { auth } from "@/auth"

import { AddressForm, UserForm } from "@/components/forms"
import { Button } from "@/components/ui"

import type { User } from "@prisma/client"
import { getAddressByUser } from "@/actions"

export default async function AccountPage(): Promise<React.ReactElement> {
	const session = await auth()

	if (!session?.user || session?.user.id == undefined) {
		return (
			<main className="flex flex-col gap-5 px-5 pb-20 pt-5 text-text-100 sm:px-10 md:px-20 lg:px-40">
				<h1 className="text-3xl font-bold">Account</h1>
				<p>You must be logged in to see your account.</p>
			</main>
		)
	}

	const { address } = await getAddressByUser(session.user.id)

	return (
		<main className="mx-auto flex max-w-[1900px] flex-col gap-5 px-5 pb-20 pt-24 text-text-100 sm:px-10 md:px-20 md:pt-40 lg:px-40">
			<h1 className="sr-only">Account</h1>

			{session.user.id !== undefined && (
				<section className="flex w-full flex-col gap-6 xl:flex-row">
					<div className="w-full xl:w-1/2">
						<h2 className="mb-2 text-2xl font-bold">Personal Information</h2>
						<UserForm user={session.user as User} />
					</div>

					<div className="w-full xl:w-1/2">
						<h2 className="mb-2 text-2xl font-bold">Address</h2>
						<AddressForm address={address ? address[0] : undefined} userId={session.user.id}>
							<Button
								type="submit"
								size={"lg"}
								className="bg-blue-400 hover:bg-blue-300 sm:col-span-2"
							>
								Update
							</Button>
						</AddressForm>
					</div>
				</section>
			)}
		</main>
	)
}
