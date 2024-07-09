"use server"

import { OrderResponse } from "@/interfaces"
import prisma from "@/lib/prisma"

import type { Order } from "@prisma/client"

const getOrders = async (
	page = 1,
	limit = 10
): Promise<{ ok: boolean; total: number; orders?: Order[]; message?: string }> => {
	try {
		const [total, orders] = await Promise.all([
			await prisma.order.count(),
			await prisma.order.findMany({
				take: limit,
				skip: (page - 1) * limit,
			}),
		])

		return {
			ok: true,
			total,
			orders,
		}
	} catch (error) {
		return {
			ok: false,
			total: 0,
			message: `${error}`,
		}
	}
}

const getOrder = async (
	id: number
): Promise<{ ok: boolean; order: Order | null; message?: string }> => {
	try {
		const order = await prisma.order.findUnique({
			where: {
				id,
			},
		})

		return {
			ok: true,
			order,
		}
	} catch (error) {
		return {
			ok: false,
			order: null,
			message: `${error}`,
		}
	}
}

const getOrdersByUser = async (
	userId: string,
	page = 1,
	limit = 10
): Promise<{ ok: boolean; total: number; orders: OrderResponse[]; message?: string }> => {
	try {
		const [total, orders] = await Promise.all([
			await prisma.order.count({
				where: {
					userId,
				},
			}),
			await prisma.order.findMany({
				where: {
					userId,
				},
				include: {
					payment: true,
					items: true,
				},
				take: limit,
				skip: (page - 1) * limit,
			}),
		])

		return {
			ok: true,
			total,
			orders,
		}
	} catch (error) {
		return {
			ok: false,
			total: 0,
			orders: [],
			message: `${error}`,
		}
	}
}

export { getOrder, getOrders, getOrdersByUser }
