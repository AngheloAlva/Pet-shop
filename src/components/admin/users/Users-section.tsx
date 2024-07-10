"use client"

import { useUsersWithPagination } from "@/hooks"
import ProductsSectionSkeleton from "../skeletons/Products-section-skeleton"
import UserItem from "./User-item"
import { PaginationButtons } from "@/components/ui"

function AdminUsersSection(): React.ReactElement {
	const limit = 10
	const { isLoading, users, page, setPage, total } = useUsersWithPagination({
		isAvailable: true,
		limit,
	})

	return (
		<>
			{isLoading ? (
				<ProductsSectionSkeleton />
			) : (
				<section className="flex flex-col gap-2">
					<div className="flex w-full items-center justify-between">
						<h2 className="text-lg font-bold">Users</h2>
						<p>{total} users</p>
					</div>
					<div className="flex gap-4">
						<section className="grid w-full grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
							{users.map((user) => (
								<UserItem key={user.id} user={user} />
							))}
						</section>
					</div>

					<div className="mt-7 flex w-full items-center justify-center gap-2">
						<PaginationButtons setPage={setPage} limit={limit} total={total} page={page} />
					</div>
				</section>
			)}
		</>
	)
}

export default AdminUsersSection
