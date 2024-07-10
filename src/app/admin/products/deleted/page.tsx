import AdminDeletedProductsSection from "@/components/admin/products/Deleted-products-section"

function AdminDeletedProductsPage(): React.ReactElement {
	return (
		<main className="md flex flex-col gap-7 px-5 pb-20 pt-4 text-text-100">
			<AdminDeletedProductsSection />
		</main>
	)
}

export default AdminDeletedProductsPage
