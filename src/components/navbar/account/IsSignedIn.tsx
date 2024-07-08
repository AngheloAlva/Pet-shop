import Link from "next/link"

import { FaUserLock, FaIdCardClip, FaArrowRightFromBracket } from "react-icons/fa6"
import { Button, Separator } from "@/components/ui"

import type { User } from "@prisma/client"

export default function IsSignedIn({ user }: { user: User }): React.ReactElement {
	return (
		<>
			{user?.role === "ADMIN" && (
				<>
					<Link
						href={"/admin"}
						className="flex w-full cursor-pointer items-center font-medium hover:text-blue-400"
					>
						<FaUserLock className="h-5 w-5" />
						<span className="ml-2">Admin</span>
					</Link>

					<Separator />
				</>
			)}

			<Link
				href="/account"
				className="flex w-full cursor-pointer items-center font-medium hover:text-blue-400"
			>
				<FaIdCardClip className="h-5 w-5" />
				<span className="ml-2">Account</span>
			</Link>

			<Separator />

			<Button>
				<div className="flex w-full cursor-pointer items-center font-medium hover:text-blue-400">
					<FaArrowRightFromBracket className="h-5 w-5" />
					<span className="ml-2">Sign Out</span>
				</div>
			</Button>
		</>
	)
}
