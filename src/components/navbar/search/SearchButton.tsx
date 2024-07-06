import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui"
import { FaMagnifyingGlass } from "react-icons/fa6"
import SearchSection from "./SeachSection"

function SearchButton(): React.ReactElement {
	return (
		<Dialog>
			<DialogTrigger className="text-text-200 hover:text-bg-100 md:hover:bg-bg-200 md:hover:text-text-200 hover:bg-cream-500 flex cursor-pointer items-center justify-between rounded-lg p-1 transition-colors md:cursor-text md:gap-2 md:border md:border-input md:bg-white md:px-2">
				<FaMagnifyingGlass className="h-7 w-7 p-[2px]" />
				<div className="hidden w-52 text-left text-muted-foreground md:block">Search...</div>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Search for a product</DialogTitle>
				</DialogHeader>

				<SearchSection />
			</DialogContent>
		</Dialog>
	)
}

export default SearchButton
