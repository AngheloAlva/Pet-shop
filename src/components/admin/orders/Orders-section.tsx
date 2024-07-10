"use client"

import { ProductsSectionSkeleton } from "@/components/sections"
import { PaginationButtons } from "@/components/ui"
import { useOrdersWithPagination } from "@/hooks"
import OrderItem from "./Order-item"

function AdminOrdersSection(): React.ReactElement {
	const limit = 10
	const { isLoading, orders, page, setPage, total } = useOrdersWithPagination({
		limit,
	})

	return (
		<>
			{isLoading ? (
				<ProductsSectionSkeleton />
			) : (
				<section className="flex flex-col gap-2">
					<div className="flex w-full items-center justify-between">
						<h2 className="text-lg font-bold">Orders</h2>
						<p>{total} orders</p>
					</div>
					<div className="flex gap-4">
						<section className="grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
							{orders.map((order) => (
								<OrderItem key={order.id} order={order} />
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

export default AdminOrdersSection
