import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui"
import CategoryList from "./CategoryList"
import { FaBars } from "react-icons/fa6"

function SheetMenu(): React.ReactElement {
	return (
		<Sheet>
			<SheetTrigger className="text-text-200 hover:text-bg-100 hover:bg-cream-500 rounded-lg p-1 transition-colors">
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

export default SheetMenu
