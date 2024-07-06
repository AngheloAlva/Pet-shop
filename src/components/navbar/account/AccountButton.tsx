import { auth } from "@/auth"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui"
import IsSignedOut from "./IsSignedOut"
import { FaUser } from "react-icons/fa6"
import IsSignedIn from "./IsSignedIn"

import type { User } from "@prisma/client"

export async function AccountButton() {
	const session = await auth()
	const user = session?.user

	return (
		<Popover>
			<PopoverTrigger className="text-text-200 hover:text-bg-100 hover:bg-cream-500 cursor-pointer rounded-lg p-1 transition-colors">
				<FaUser className="h-7 w-7 p-[1px]" />
			</PopoverTrigger>
			<PopoverContent className="max-w-52">
				<div className="text-text-100 flex flex-col items-start gap-2">
					{session ? <IsSignedIn user={user as User} /> : <IsSignedOut />}
				</div>
			</PopoverContent>
		</Popover>
	)
}
