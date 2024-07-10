"use client"

import { usePathname } from "next/navigation"

import {
	FaBoxesStacked,
	FaCartFlatbed,
	FaCopyright,
	FaHouse,
	FaList,
	FaUsers,
} from "react-icons/fa6"
import LinkItem from "./LinkItem"

function VerticalAdminNavbar(): React.ReactElement {
	const pathName = usePathname()
	const path = pathName.split("/")

	return (
		<div className="hidden min-w-52 max-w-52 flex-1 overflow-auto py-2 md:block">
			<nav className="grid items-start px-4 font-medium">
				<LinkItem
					href="/admin"
					icon={<FaHouse className="h-4 w-4" />}
					pathName={`/${path[1]}`}
					text="Home"
				/>
				<LinkItem
					href="/admin/products"
					icon={<FaBoxesStacked className="h-4 w-4" />}
					pathName={`/${path[1]}/${path[2]}`}
					text="Products"
				/>
				<LinkItem
					href="/admin/categories"
					icon={<FaList className="h-4 w-4" />}
					pathName={`/${path[1]}/${path[2]}`}
					text="Categories"
				/>
				<LinkItem
					href="/admin/brands"
					icon={<FaCopyright className="h-4 w-4" />}
					pathName={`/${path[1]}/${path[2]}`}
					text="Brand"
				/>
				<LinkItem
					href="/admin/orders"
					icon={<FaCartFlatbed className="h-4 w-4" />}
					pathName={`/${path[1]}/${path[2]}`}
					text="Orders"
				/>
				<LinkItem
					href="/admin/users"
					icon={<FaUsers className="h-4 w-4" />}
					pathName={`/${path[1]}/${path[2]}`}
					text="Users"
				/>
			</nav>
		</div>
	)
}

export default VerticalAdminNavbar
