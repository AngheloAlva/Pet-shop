import Image from "next/image"
import Link from "next/link"

interface PetCardProps {
	src: string
	alt: string
	href: string
}

export default function PetCard({ src, alt, href }: PetCardProps): React.ReactElement {
	return (
		<Link href={href}>
			<Image className="rounded-lg" src={src} alt={alt} width={500} height={500} />
		</Link>
	)
}
