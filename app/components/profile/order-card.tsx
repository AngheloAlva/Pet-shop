import { format } from 'date-fns'

import { Card, CardContent, CardTitle } from '../ui/card'
import ProductOrderItem from './Product-order-item'

import type { Order } from '@/types/user/order.types'

function OrderCard (
  { order }: { order: Order }
): React.ReactElement {
  return (
    <Card>
      <CardContent className='pt-5'>
        <CardTitle className='text-xl mb-2'>
          Order ID: {order.id}
        </CardTitle>
        <p><strong>Order Date: </strong>{format(order.orderDate, 'PPP')}</p>
        <p><strong>Shipping Method: </strong>{order.shippingMethod}</p>
        <p><strong>Address: </strong>{order.address.street} {order.address.number}, {order.address.commune}, {order.address.region}</p>

        {(order.payment !== undefined && order.payment !== null) && (
          <p><strong>Total: </strong>${order?.payment.amount.toLocaleString()}</p>
        )}

        <div>
          <strong>Products:</strong>
          {order.items.map((item) => (
            <ProductOrderItem orderItem={item} key={item.id} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default OrderCard
