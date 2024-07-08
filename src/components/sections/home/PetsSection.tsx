import { PetCard } from "@/components/ui"

const pets = [
	{ src: "/pets/for-dogs.png", alt: "For Dogs", href: "/pets/dog" },
	{ src: "/pets/for-cats.png", alt: "For Cats", href: "/pets/cat" },
	{ src: "/pets/for-birds.png", alt: "For Birds", href: "/pets/bird" },
	{ src: "/pets/for-reptiles.png", alt: "For Reptiles", href: "/pets/reptile" },
	{ src: "/pets/for-small-pet.png", alt: "For Small Pet", href: "/pets/small_animal" },
	{ src: "/pets/for-fish.png", alt: "For Fish", href: "/pets/fish" },
]

function PetsSection(): React.ReactElement {
	return (
		<section className="px-5 sm:px-10 md:px-20 lg:px-40">
			<h2 className="mb-2 text-3xl font-bold">Pets</h2>

			<div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
				{pets.map((pet, index) => (
					<PetCard key={index} src={pet.src} alt={pet.alt} href={pet.href} />
				))}
			</div>
		</section>
	)
}

export default PetsSection
