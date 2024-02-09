import type { OrderItem } from '@/types/user/order-item.types'

function ProductOrderItem (
  { orderItem }: { orderItem: OrderItem }
): React.ReactElement {
  return (
    <div className='flex gap-5'>
      <img src={orderItem.productImage} alt={orderItem.productName} className='w-20 h-20 object-cover' />
      <div>
        <p className='font-semibold'>{orderItem.productName}</p>
        <p>{orderItem.productPrice.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
        <p>Quantity: {orderItem.quantity}</p>
      </div>
    </div>
  )
}

export default ProductOrderItem
