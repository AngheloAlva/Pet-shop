import { Card } from '../../ui/card'
import Image from 'next/image'

import type { Brand } from '@/types/shop/brand.types'

function BrandCard (
  { brand }: { brand: Brand }
): React.ReactElement {
  return (
    <Card className='px-5 py-2 bg-primary-300'>
      <div className='h-20 w-full flex items-center relative'>
        <Image
          src={brand.image}
          alt={brand.name}
          layout='fill'
          className='object-contain'
        />
      </div>
    </Card>
  )
}

export default BrandCard
