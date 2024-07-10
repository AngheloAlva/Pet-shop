import Link from "next/link"

import { AdminBrandsSection } from "@/components/admin"
import { Button, Separator } from "@/components/ui"

function AdminBrandsPage(): React.ReactElement {
	return (
		<main className="md flex flex-col gap-7 px-5 pb-20 pt-4 text-text-100">
			<div className="flex flex-col gap-2 sm:flex-row">
				<Link href="/admin/brands/create" className="w-full">
					<Button className="w-full bg-blue-400 hover:bg-blue-300">Create Brand</Button>
				</Link>
				<Link href="/admin/brands/deleted" className="w-full">
					<Button className="w-full bg-gray-600 hover:bg-gray-500">Deleted Brands</Button>
				</Link>
			</div>

			<Separator />

			<AdminBrandsSection />
		</main>
	)
}

export default AdminBrandsPage
