import Image from "next/image"
import Link from "next/link"

import AdminSheetMenu from "./SheetMenu"

function AdminNavbar(): React.ReactElement {
	return (
		<nav className="flex items-center justify-between px-5 py-2">
			<Link href="/admin">
				<Image priority src="/logo.svg" alt="logo" width={50} height={50} />
			</Link>

			<AdminSheetMenu />
		</nav>
	)
}

export default AdminNavbar
