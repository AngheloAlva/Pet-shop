import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui"
import CategoryList from "./CategoryList"
import { FaBars } from "react-icons/fa6"

export default function SheetMenu(): React.ReactElement {
	return (
		<Sheet>
			<SheetTrigger className="rounded-lg p-1 text-text-200 transition-colors hover:bg-cream-500 hover:text-bg-100">
				<FaBars className="h-7 w-7" />
			</SheetTrigger>
			<SheetContent side={"left"}>
				<SheetHeader>
					<SheetTitle>Categories</SheetTitle>
				</SheetHeader>

				<CategoryList />
			</SheetContent>
		</Sheet>
	)
}
