import AdminProductsSection from "@/components/admin/products/Products-section"
import { Button, Separator } from "@/components/ui"
import Link from "next/link"

function AdminProductsPage(): React.ReactElement {
	return (
		<main className="md flex flex-col gap-7 px-5 pb-20 pt-4 text-text-100">
			<div className="flex flex-col gap-2 sm:flex-row">
				<Link href="/admin/products/create" className="w-full">
					<Button className="w-full bg-blue-400 hover:bg-blue-300">Create Product</Button>
				</Link>
				<Link href="/admin/products/deleted" className="w-full">
					<Button className="w-full bg-gray-600 hover:bg-gray-500">Deleted Products</Button>
				</Link>
			</div>

			<Separator />

			<AdminProductsSection />
		</main>
	)
}

export default AdminProductsPage
