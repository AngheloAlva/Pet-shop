import AdminUsersSection from "@/components/admin/users/Users-section"

function AdminUsersPage(): React.ReactElement {
	return (
		<main className="md flex flex-col gap-7 px-5 pb-20 pt-4 text-text-100">
			<AdminUsersSection />
		</main>
	)
}

export default AdminUsersPage
