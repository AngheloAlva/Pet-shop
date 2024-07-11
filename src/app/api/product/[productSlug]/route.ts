import { prisma } from "@/lib"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { productSlug: string } }) {
	try {
		const slug = params.productSlug

		const product = await prisma.product.findUnique({
			where: { slug },
			include: {
				brand: {
					select: {
						name: true,
					},
				},
				category: {
					select: {
						name: true,
					},
				},
			},
		})

		if (!product) {
			return NextResponse.json({
				status: 404,
				body: { message: "Product not found" },
			})
		}

		return Response.json({ product })
	} catch (error) {
		return NextResponse.json({
			status: 500,
			body: { message: "Internal server error" },
		})
	}
}
