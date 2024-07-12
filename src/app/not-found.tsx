import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui"

function NotFound(): React.ReactElement {
	return (
		<main className="flex flex-col items-center justify-center gap-7 px-5 pb-20 pt-28 text-text-100 sm:px-10 md:h-screen md:flex-row md:px-20 md:pt-40 lg:px-56 xl:px-72">
			<div className="flex flex-col gap-2">
				<h2 className="text-3xl font-extrabold text-blue-300">Oops</h2>

				<p className="text-2xl">We can&apos;t find the page, that you are looking for.</p>

				<Link href="/" className="w-full">
					<Button
						variant={"default"}
						size={"lg"}
						className="mt-5 w-full bg-blue-300 hover:bg-blue-400"
					>
						Go back to home
					</Button>
				</Link>
			</div>

			<Image
				src="/errors/not-found.svg"
				alt="Not found illustration"
				className="w-full max-w-2xl md:h-auto md:w-1/2"
				width={700}
				height={700}
			/>
		</main>
	)
}

export default NotFound
