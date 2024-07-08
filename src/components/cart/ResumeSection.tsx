import Link from "next/link"

import ProductCartItem from "./ProductCartItem"
import { Button, Card } from "@/components/ui"

import type { ProductCart } from "@/interfaces"

interface ResumeSectionProps {
	products: ProductCart[]
}

function ResumeSection({ products }: ResumeSectionProps): React.ReactElement {
	return (
		<section className="flex w-full flex-col gap-2 lg:w-2/3">
			<h1 className="text-3xl font-bold">Cart</h1>
			<Card className="flex flex-col gap-5 px-6 py-4">
				{products.length === 0 && (
					<>
						<p className="mt-4 text-center text-xl font-medium text-text-200">Your cart is empty</p>
						<Button size="lg" className="bg-blue-500 hover:bg-blue-400">
							<Link href="/" className="w-full">
								Go to home
							</Link>
						</Button>
					</>
				)}

				{products.length > 0 && (
					<ul className="flex flex-col gap-5">
						{products.map((product) => (
							<ProductCartItem productCart={product} key={product.id} />
						))}
					</ul>
				)}
			</Card>
		</section>
	)
}

export default ResumeSection
