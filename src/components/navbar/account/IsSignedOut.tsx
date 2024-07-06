import { FaUserShield } from "react-icons/fa6"
import { Button } from "@/components/ui"

function IsSignedOut(): React.ReactElement {
	return (
		<Button>
			<div className="flex w-full cursor-pointer items-center font-medium hover:text-blue-400">
				<FaUserShield className="h-5 w-5" />
				<span className="ml-2">Sign In</span>
			</div>
		</Button>
	)
}

export default IsSignedOut
