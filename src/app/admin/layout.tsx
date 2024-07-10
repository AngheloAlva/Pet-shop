import { notFound, redirect } from "next/navigation"
import { auth } from "@/auth"

import { AdminNavbar, VerticalAdminNavbar } from "@/components/admin"

import type { User } from "@prisma/client"

export default async function AdminLayout({
	children,
}: Readonly<{ children: React.ReactNode }>): Promise<React.ReactElement> {
	const session = await auth()

	if (!session?.user) notFound()
	if ((session.user as User).role !== "ADMIN") redirect("/")

	return (
		<>
			<AdminNavbar />
			<div className="md:flex">
				<VerticalAdminNavbar />
				{children}
			</div>
		</>
	)
}
