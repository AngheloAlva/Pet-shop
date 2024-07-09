import { OrderItem } from "@prisma/client"
import Image from "next/image"

function ProductOrderItem({ orderItem }: { orderItem: OrderItem }): React.ReactElement {
	return (
		<div className="flex gap-5">
			<Image
				width={100}
				height={100}
				src={orderItem.productImage}
				alt={orderItem.productName}
				className="h-20 w-20 object-cover"
			/>
			<div>
				<p className="font-semibold">{orderItem.productName}</p>
				<p>
					{orderItem.productPrice.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
				</p>
				<p>Quantity: {orderItem.quantity}</p>
			</div>
		</div>
	)
}

export default ProductOrderItem
