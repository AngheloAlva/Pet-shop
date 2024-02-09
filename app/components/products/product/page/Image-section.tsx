'use client'

import Image from 'next/image'
import { useState } from 'react'
import ImagesCarousel from '../ui/Images-carousel'

function ImageSection (
  { images, name }: { images: string[], name: string }
): React.ReactElement {
  const [imageSelected, setImageSelected] = useState(0)

  return (
    <section className='w-full lg:w-1/2 flex flex-col gap-4'>
      <div className='p-7 bg-white rounded-lg border border-input overflow-hidden w-full'>
        <Image
          src={images[imageSelected]}
          alt={name}
          width={500}
          height={500}
          className='w-full h-full'
        />
      </div>
      {
        images.length > 1 && (
          <ImagesCarousel images={images} name={name} setImageSelected={setImageSelected} />
        )
      }
    </section>
  )
}

export default ImageSection
