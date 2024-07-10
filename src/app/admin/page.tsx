import { Suspense } from "react"

import {
	AdminBrandsInfo,
	AdminOrdersInfo,
	AdminProductsInfo,
	GenericInfoSkeleton,
	AdminCategoriesInfo,
} from "@/components/admin"

function AdminDashboardPage(): React.ReactElement {
	return (
		<main className="md flex flex-col gap-7 px-5 pb-20 pt-4 text-text-100">
			<section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
				<Suspense fallback={<GenericInfoSkeleton />}>
					<AdminProductsInfo />
				</Suspense>

				<Suspense fallback={<GenericInfoSkeleton />}>
					<AdminCategoriesInfo />
				</Suspense>

				<Suspense fallback={<GenericInfoSkeleton />}>
					<AdminBrandsInfo />
				</Suspense>

				<Suspense fallback={<GenericInfoSkeleton />}>
					<AdminOrdersInfo />
				</Suspense>
			</section>
		</main>
	)
}

export default AdminDashboardPage
