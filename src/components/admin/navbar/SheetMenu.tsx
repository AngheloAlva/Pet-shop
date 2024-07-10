"use client"

import { usePathname } from "next/navigation"

import LinkItem from "./LinkItem"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../../ui/sheet"
import {
	FaBars,
	FaBoxesStacked,
	FaCartFlatbed,
	FaCopyright,
	FaHouse,
	FaList,
	FaUsers,
} from "react-icons/fa6"

function AdminSheetMenu(): React.ReactElement {
	const pathName = usePathname()

	return (
		<Sheet>
			<SheetTrigger className="rounded-lg p-1 text-text-200 transition-colors hover:bg-gray-400 hover:text-bg-100 md:hidden">
				<FaBars className="h-7 w-7" />
			</SheetTrigger>
			<SheetContent side={"right"}>
				<SheetHeader>
					<SheetTitle>Admin Menu</SheetTitle>
				</SheetHeader>

				<div className="mt-10 flex flex-col gap-2 text-text-100">
					<LinkItem
						href="/admin"
						icon={<FaHouse className="h-4 w-4" />}
						pathName={pathName}
						text="Home"
					/>
					<LinkItem
						href="/admin/products"
						icon={<FaBoxesStacked className="h-4 w-4" />}
						pathName={pathName}
						text="Products"
					/>
					<LinkItem
						href="/admin/categories"
						icon={<FaList className="h-4 w-4" />}
						pathName={pathName}
						text="Categories"
					/>
					<LinkItem
						href="/admin/brands"
						icon={<FaCopyright className="h-4 w-4" />}
						pathName={pathName}
						text="Brand"
					/>
					<LinkItem
						href="/admin/orders"
						icon={<FaCartFlatbed className="h-4 w-4" />}
						pathName={pathName}
						text="Orders"
					/>
					<LinkItem
						href="/admin/users"
						icon={<FaUsers className="h-4 w-4" />}
						pathName={pathName}
						text="Users"
					/>
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default AdminSheetMenu
