import { notFound, redirect } from "next/navigation"
import { auth } from "@/auth"
import Link from "next/link"

import { CheckoutResume } from "@/components/sections"
import { Button } from "@/components/ui"

import type { User } from "@prisma/client"

export default async function CartPage(): Promise<React.ReactElement> {
	const session = await auth()

	if (!session || !session.user) {
		redirect("/auth/login")
	}

	return (
		<main className="lg:px-34 flex w-screen flex-col gap-10 px-5 pb-20 pt-28 text-text-100 sm:px-10 md:px-20 md:pt-40 xl:px-44 2xl:px-60">
			<CheckoutResume user={session.user as User} />
			<div>
				<Button size={"lg"} className="mt-5 w-full bg-green-600 p-0 hover:bg-green-500">
					<Link
						href="/checkout/shipping"
						className="flex h-full w-full items-center justify-center"
					>
						Go to shipping
					</Link>
				</Button>
			</div>
		</main>
	)
}
