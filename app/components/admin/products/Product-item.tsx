import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

import AlertDeleteProduct from './Alert-delete-product'
import OptionDialog from './Option-dialog'
import { Button } from '../../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../../ui/card'

import type { Product } from '@/types/shop/products.types'
import AlertRestoreProduct from './Alert-restore-product'

function AdminProductItem (
  { product, refresh }: { product: Product, refresh: () => Promise<void> }
): React.ReactElement {
  const { user } = useUser()

  return (
    <Card className='flex items-center'>
      <CardHeader className='p-2'>
        <Image
          src={product.images[0]}
          alt={product.name}
          width={300}
          height={300}
          className='h-auto w-24 object-contain rounded-lg'
        />
      </CardHeader>

      <CardContent className='flex flex-col p-5 w-full'>
        <CardTitle>
          {product.name}
        </CardTitle>
        <CardDescription>
          {product.brand?.name}
        </CardDescription>

        {
          user?.id !== undefined && (
            <div className='flex flex-wrap gap-2 text-xs mt-2'>
              {product.options?.map((option, index) => (
                <OptionDialog
                  key={index}
                  option={option}
                  authId={user?.id}
                  refresh={refresh}
                />
              ))}
            </div>
          )
        }
      </CardContent>

      {user?.id !== undefined && (
        product.isAvailable
          ? (<div className='pr-2 flex flex-col gap-2 w-1/4'>
            <Link href={`/admin/products/update/${product.id}`}>
              <Button variant={'outline'} size={'sm'} className='w-full'>
                Edit
              </Button>
            </Link>

            <AlertDeleteProduct
              productId={product.id}
              authId={user?.id}
              refresh={refresh}
            />
          </div>)
          : (<div className='pr-2 flex flex-col gap-2 w-1/4'>
            <AlertRestoreProduct
              authId={user?.id}
              productId={product.id}
              refresh={refresh}
            />
          </div>)
      )}
    </Card>
  )
}

export default AdminProductItem
