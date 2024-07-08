import Image from "next/image"
import Link from "next/link"

import { Card } from "@/components/ui"

import type { Brand } from "@prisma/client"

export default function BrandCard({ brand }: { brand: Brand }): React.ReactElement {
	return (
		<Link href={`/brands/${brand.slug}`}>
			<Card className="bg-cream-500 px-5 py-2">
				<div className="relative flex h-20 w-full items-center">
					<Image
						src={brand.image}
						alt={brand.name}
						width={200}
						height={100}
						className="object-contain"
					/>
				</div>
			</Card>
		</Link>
	)
}
