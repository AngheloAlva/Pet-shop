"use client"

import Image from "next/image"
import { useState } from "react"
import ImagesCarousel from "./ImagesCarousel"

function ImageSection({ images, name }: { images: string[]; name: string }): React.ReactElement {
	const [imageSelected, setImageSelected] = useState(0)

	return (
		<section className="flex w-full flex-col items-center gap-4 md:w-auto lg:w-2/5">
			<div className="w-full max-w-md overflow-hidden rounded-lg border border-input bg-white p-7 xl:max-w-lg">
				<Image
					src={images[imageSelected]}
					alt={name}
					width={500}
					height={500}
					className="h-full w-full"
				/>
			</div>
			{images.length > 1 && (
				<ImagesCarousel images={images} name={name} setImageSelected={setImageSelected} />
			)}
		</section>
	)
}

export default ImageSection
