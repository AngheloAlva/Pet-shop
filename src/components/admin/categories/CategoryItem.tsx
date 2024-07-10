import { format } from "date-fns"
import AlertDeleteCategory from "./AlertDeleteCategory"
import Link from "next/link"
import AlertRestoreCategory from "./AlertRestoreProduct"
import { Category } from "@prisma/client"
import { Button, Card } from "@/components/ui"

function AdminCategoryItem({
	category,
	refresh,
}: {
	category: Category
	refresh: () => Promise<void>
}): React.ReactElement {
	return (
		<Card className="space-y-3 p-5">
			<div className="space-y-3">
				<div className="flex items-center justify-between">
					<h3 className="text-xl font-bold">{category.name}</h3>
					{category.isAvailable ? (
						<div className="space-x-2">
							<Link href={`/admin/categories/update/${category.id}`}>
								<Button size={"sm"} variant={"outline"}>
									Edit
								</Button>
							</Link>
							<AlertDeleteCategory categoryId={category.id} refresh={refresh} />
						</div>
					) : (
						<AlertRestoreCategory categoryId={category.id} refresh={refresh} />
					)}
				</div>
				<p>{category.description}</p>
			</div>
			<div>
				<p>
					<strong>Pet type: </strong>
					{category.petType}
				</p>
				<p>
					<strong>Created at: </strong>
					{format(category.createdAt, "PPP")}
				</p>
			</div>
		</Card>
	)
}

export default AdminCategoryItem
