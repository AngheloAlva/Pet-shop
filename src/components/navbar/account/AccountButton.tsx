import { auth } from "@/auth"
import Link from "next/link"

import { Button, Popover, PopoverContent, PopoverTrigger } from "@/components/ui"
import { FaUser, FaUserShield } from "react-icons/fa6"
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
					{user ? (
						<IsSignedIn user={user as User} />
					) : (
						<>
							<Link href="/auth/register" passHref className="w-full">
								<Button className="flex w-full cursor-pointer items-center font-medium">
									<FaUserShield className="h-5 w-5" />
									<span className="ml-2">Register</span>
								</Button>
							</Link>
							<Link href="/auth/login" passHref className="w-full">
								<Button
									variant={"secondary"}
									className="flex w-full cursor-pointer items-center font-medium"
								>
									<FaUser className="h-5 w-5" />
									<span className="ml-2">Sign In</span>
								</Button>
							</Link>
						</>
					)}
				</div>
			</PopoverContent>
		</Popover>
	)
}
