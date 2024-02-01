import PetCard from '../ui/Pet-card'

const pets = [
  { src: '/images/for-dogs.png', alt: 'For Dogs', href: '/pets/dogs' },
  { src: '/images/for-cats.png', alt: 'For Cats', href: '/pets/cats' },
  { src: '/images/for-birds.png', alt: 'For Birds', href: '/pets/birds' },
  { src: '/images/for-reptiles.png', alt: 'For Reptiles', href: '/pets/reptiles' },
  { src: '/images/for-small-pet.png', alt: 'For Small Pet', href: '/pets/small-pet' },
  { src: '/images/for-fish.png', alt: 'For Fish', href: '/pets/fish' }
]

function PetsSection (): React.ReactElement {
  return (
    <section className='px-5 sm:px-10 md:px-20 lg:px-40'>
      <h2 className='text-3xl font-bold mb-2'>Pets</h2>

      <div className='grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3'>
        {
          pets.map((pet, index) => (
            <PetCard
              key={index}
              src={pet.src}
              alt={pet.alt}
              href={pet.href}
            />
          ))
        }
      </div>
    </section>
  )
}

export default PetsSection
