import Image from "next/image"
import { auth } from "@/auth"
import Link from "next/link"

import { AccountButton, NavMenu, SearchButton, SheetMenu } from "./index"
import { CartButton } from "../cart"
import { User } from "@prisma/client"

export default async function Navbar(): Promise<React.ReactElement> {
	const session = await auth()

	return (
		<header className="fixed left-0 right-0 top-0 z-50 bg-bg-100 shadow-md">
			<nav className="mx-auto flex max-w-[1900px] items-center justify-between px-4 py-2 md:px-8 lg:px-24 lg:py-4 xl:px-36">
				<div className="flex items-center gap-2 md:hidden">
					<SheetMenu />

					<SearchButton />
				</div>

				<Link href="/">
					<Image src={"/logo.svg"} priority alt="logo" width={50} height={50} />
				</Link>

				<div className="hidden md:block">
					<SearchButton />
				</div>

				<div className="flex items-center gap-2">
					<AccountButton />
					<CartButton user={session?.user as User | undefined} />
				</div>
			</nav>
			<nav className="mx-auto hidden w-full max-w-[1900px] items-center justify-center pb-4 md:flex">
				<NavMenu />
			</nav>
		</header>
	)
}
