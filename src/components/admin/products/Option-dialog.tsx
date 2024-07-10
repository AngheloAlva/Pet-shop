import UpdateOptionForm from "../forms/option/Update-option-form"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../ui/dialog"
import { Option } from "@prisma/client"

interface OptionDialogProps {
	option: Option
	authId: string
	refresh: () => Promise<void>
}

function OptionDialog({ option, authId, refresh }: OptionDialogProps): React.ReactElement {
	return (
		<Dialog>
			<DialogTrigger className="inline-flex h-8 w-fit items-center justify-center whitespace-nowrap rounded-md border border-input bg-transparent px-2 py-1 text-xs font-medium shadow-sm transition-colors hover:bg-accent hover:bg-white hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:px-3">
				{option.name} -{" "}
				{option.price.toLocaleString("es-CL", { style: "currency", currency: "CLP" })} (
				{option.stock} stock)
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edit option</DialogTitle>

					<UpdateOptionForm option={option} authId={authId} refresh={refresh} />
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default OptionDialog
