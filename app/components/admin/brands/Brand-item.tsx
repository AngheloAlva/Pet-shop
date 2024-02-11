import { Card } from '../../ui/card'

import type { Brand } from '@/types/shop/brand.types'

function AdminBrandItem (
  { brand }: { brand: Brand }
): React.ReactElement {
  return (
    <Card className='p-5 flex gap-4'>
      <div className='bg-cream-300 rounded-lg overflow-hidden p-2'>
        <img src={brand.image} alt={brand.name} className='w-40 h-full object-contain' />
      </div>
      <h3 className='text-xl font-semibold'>
        Name: {brand.name}
      </h3>
    </Card>
  )
}

export default AdminBrandItem
