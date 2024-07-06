import Image from "next/image"
import { auth } from "@/auth"
import Link from "next/link"

import { AccountButton } from "./account/AccountButton"
import SearchButton from "./search/SearchButton"
import CartButton from "./cart/CartButton"
import SheetMenu from "./sheet/SheetMenu"
import NavMenu from "./nav-menu/NavMenu"

async function Navbar(): Promise<React.ReactElement> {
	const session = await auth()

	return (
		<header className="bg-bg-100 fixed left-0 right-0 top-0 z-50 shadow-md">
			<nav className="flex items-center justify-between px-4 py-2 md:px-8 lg:px-24 lg:py-4 xl:px-36">
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
					<CartButton />
				</div>
			</nav>
			<nav className="hidden w-full items-center justify-center pb-4 md:flex">
				<NavMenu />
			</nav>
		</header>
	)
}

export default Navbar
