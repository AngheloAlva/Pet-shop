import { format } from "date-fns"

import { Card, CardContent, CardTitle } from "../card"
import ProductOrderItem from "./Product-order-item"

import type { OrderResponse } from "@/interfaces"

function OrderCard({ order }: { order: OrderResponse }): React.ReactElement {
	return (
		<Card>
			<CardContent className="pt-5">
				<CardTitle className="mb-2 flex items-center justify-between text-xl">
					Order ID: {order.id}
					<div
						className={
							"rounded-lg border border-input px-3 py-1 text-sm text-bg-100" +
							(order.paid ? " bg-green-500" : " bg-red-400")
						}
					>
						{order.paid ? "Paid" : "Unpaid"}
					</div>
				</CardTitle>
				<p>
					<strong>Order Date: </strong>
					{format(order.orderDate, "PPP")}
				</p>
				<p>
					<strong>Shipping Method: </strong>
					{order.shippingMethod}
				</p>
				<p>
					<strong>Address: </strong>
					{order.address}
				</p>

				{order.payment !== undefined && order.payment !== null && (
					<p>
						<strong>Total: </strong>
						{order?.payment.amount.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
					</p>
				)}

				<div className="space-y-2">
					<strong>Products:</strong>
					<div className="space-y-4">
						{order.items.map((item) => (
							<ProductOrderItem orderItem={item} key={item.id} />
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export default OrderCard
