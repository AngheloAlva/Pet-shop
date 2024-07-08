import { auth } from "@/auth"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui"
import { FaUser } from "react-icons/fa6"
import IsSignedOut from "./IsSignedOut"
import IsSignedIn from "./IsSignedIn"

import type { User } from "@prisma/client"

export default async function AccountButton() {
	const session = await auth()
	const user = session?.user

	return (
		<Popover>
			<PopoverTrigger className="cursor-pointer rounded-lg p-1 text-text-200 transition-colors hover:bg-cream-500 hover:text-bg-100">
				<FaUser className="h-7 w-7 p-[1px]" />
			</PopoverTrigger>
			<PopoverContent className="max-w-52">
				<div className="flex flex-col items-start gap-2 text-text-100">
					{session ? <IsSignedIn user={user as User} /> : <IsSignedOut />}
				</div>
			</PopoverContent>
		</Popover>
	)
}
