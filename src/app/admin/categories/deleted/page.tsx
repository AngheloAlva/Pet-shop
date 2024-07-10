import AdminDeletedCategoriesSection from "@/components/admin/categories/Deleted-categories-section"

function AdminDeletedCategoriesPage(): React.ReactElement {
	return (
		<main className="md flex flex-col gap-7 px-5 pb-20 pt-4 text-text-100">
			<AdminDeletedCategoriesSection />
		</main>
	)
}

export default AdminDeletedCategoriesPage
