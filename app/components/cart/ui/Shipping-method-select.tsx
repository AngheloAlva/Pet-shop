import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/app/components/ui/select'

import type { ShippingMethod } from '@/types/shop/payment.types'

const shippingMethods = [
  'CHILEXPRESS',
  'STARKEN',
  'CORREOS_CHILE',
  'SHOP_PICKUP'
]

interface ShippingMethodSelectProps {
  onChange: (method: ShippingMethod['method']) => void
  shippingMethod: string
}

function ShippingMethodSelect (
  { onChange, shippingMethod }: ShippingMethodSelectProps
): React.ReactElement {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className='bg-white mt-2'>
        <SelectValue placeholder={shippingMethod} />
      </SelectTrigger>
      <SelectContent>
        {shippingMethods.map((method) => (
          <SelectItem value={method} key={method}>
            {method.split('_').join(' ')}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default ShippingMethodSelect
