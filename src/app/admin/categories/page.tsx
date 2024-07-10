import { AdminCategoriesSection } from "@/components/admin"
import { Button, Separator } from "@/components/ui"
import Link from "next/link"

function AdminCategoriesPage(): React.ReactElement {
	return (
		<main className="md flex flex-col gap-7 px-5 pb-20 pt-4 text-text-100">
			<div className="flex flex-col gap-2 sm:flex-row">
				<Link href="/admin/categories/create" className="w-full">
					<Button className="w-full bg-blue-400 hover:bg-blue-300">Create Category</Button>
				</Link>
				<Link href="/admin/categories/deleted" className="w-full">
					<Button className="w-full bg-gray-600 hover:bg-gray-500">Deleted Categories</Button>
				</Link>
			</div>

			<Separator />

			<AdminCategoriesSection />
		</main>
	)
}

export default AdminCategoriesPage
