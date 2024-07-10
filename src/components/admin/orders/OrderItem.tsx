import { format } from "date-fns"
import { Card } from "../../ui/card"

import type { Order } from "@prisma/client"

function OrderItem({ order }: { order: Order }): React.ReactElement {
	return (
		<Card key={order.id} className="flex flex-col p-5">
			<h3 className="mb-1 text-lg font-bold">Order ID: {order.id}</h3>
			<p>
				<strong>User ID: </strong>
				{order.userId}
			</p>
			<p>
				<strong>Order Date: </strong>
				{format(order.orderDate, "PPP")}
			</p>
			{/* <p><strong>Total amount: </strong>{order.payment?.amount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
      <p><strong>Payment Status: </strong>{order.payment?.status}</p>
      <div><strong>Products: </strong>{order.items.map((product) => (
        <div className='flex flex-col ml-2' key={product.id}>
          <span>Name: {product.productName}</span>
          <span>Quantity: {product.quantity}</span>
          <span>Price: {product.productPrice.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</span>
        </div>
      ))}</div> */}
		</Card>
	)
}

export default OrderItem
