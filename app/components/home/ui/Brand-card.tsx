import { Card } from '../../ui/card'
import Image from 'next/image'

import type { Brand } from '@/types/shop/brand.types'

function BrandCard (
  { brand }: { brand: Brand }
): React.ReactElement {
  return (
    <Card className='px-5 py-2 bg-cream-500'>
      <div className='h-20 w-full flex items-center relative'>
        <Image
          src={brand.image}
          alt={brand.name}
          width={200}
          height={100}
          className='object-contain'
        />
      </div>
    </Card>
  )
}

export default BrandCard
