import Image from "next/image"
import Link from "next/link"

import { Card } from "@/components/ui"

import type { Brand } from "@prisma/client"

export default function BrandCard({ brand }: { brand: Brand }): React.ReactElement {
	return (
		<Link href={`/brands/${brand.slug}`} className="flex h-full w-full">
			<Card className="flex w-full flex-col items-center justify-center bg-neutral-50 px-5 py-2 shadow-none">
				<Image
					src={brand.image}
					alt={brand.name}
					width={200}
					height={100}
					className="h-full max-h-28 w-auto rounded-md object-contain drop-shadow-md"
				/>
			</Card>
		</Link>
	)
}
