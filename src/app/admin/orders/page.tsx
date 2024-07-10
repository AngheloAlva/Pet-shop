import AdminOrdersSection from "@/components/admin/orders/Orders-section"

function AdminOrdersPage(): React.ReactElement {
	return (
		<main className="md flex flex-col gap-7 px-5 pb-20 pt-4 text-text-100">
			<AdminOrdersSection />
		</main>
	)
}

export default AdminOrdersPage
