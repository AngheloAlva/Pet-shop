import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui"
import { FaMagnifyingGlass } from "react-icons/fa6"
import SearchSection from "./SeachSection"

export default function SearchButton(): React.ReactElement {
	return (
		<Dialog>
			<DialogTrigger className="flex cursor-pointer items-center justify-between rounded-lg p-1 text-text-200 transition-colors hover:bg-cream-500 hover:text-bg-100 md:cursor-text md:gap-2 md:border md:border-input md:bg-white md:px-2 md:hover:bg-bg-200 md:hover:text-text-200">
				<FaMagnifyingGlass className="h-7 w-7 p-[2px]" />
				<div className="hidden w-52 text-left text-muted-foreground md:block">Search...</div>
			</DialogTrigger>
			<DialogContent className="top-10 translate-y-0">
				<DialogHeader>
					<DialogTitle>Search for a product</DialogTitle>
				</DialogHeader>

				<SearchSection />
			</DialogContent>
		</Dialog>
	)
}
