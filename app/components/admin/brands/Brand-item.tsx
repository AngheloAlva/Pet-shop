import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'

import AlertRestoreBrand from './Alert-restore-product'
import AlertDeleteBrand from './Alert-delete-brand'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'

import type { Brand } from '@/types/shop/brand.types'

function AdminBrandItem (
  { brand, refresh }: { brand: Brand, refresh: () => Promise<void> }
): React.ReactElement {
  const { userId } = useAuth()

  return (
    <Card className='p-5 flex gap-4'>
      <div className='bg-blue-200 rounded-lg overflow-hidden p-2'>
        <img src={brand.image} alt={brand.name} className='w-40 h-full object-contain' />
      </div>
      <div className='flex flex-col justify-between'>
        <h3 className='text-xl font-semibold'>
          Name: {brand.name}
        </h3>
        {userId != null && (
          brand.isAvailable
            ? (<div className='space-x-2'>
                <Link href={`/admin/brands/edit/${brand.id}`}>
                  <Button variant={'outline'} size={'sm'}>
                    Edit
                  </Button>
                </Link>
                <AlertDeleteBrand brandId={brand.id} authId={userId} refresh={refresh} />
            </div>)
            : <AlertRestoreBrand brandId={brand.id} authId={userId} refresh={refresh} />
        )}
      </div>
    </Card>
  )
}

export default AdminBrandItem
