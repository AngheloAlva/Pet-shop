import axiosInstance from '../../axios/axios-instance'

import type { Order } from '@/types/user/order.types'

const getOrders = async (authId: string, page = 1, limit = 10): Promise<{ total: number, orders: Order[] }> => {
  const { data } = await axiosInstance.get<{ total: number, orders: Order[] }>(
    `/order?page=${page}&limit=${limit}&authId=${authId}`
  )

  return data
}

const getOrder = async (id: number): Promise<Order> => {
  const { data } = await axiosInstance.get<Order>(`/order/${id}`)

  return data
}

const getOrdersByUser = async (userId: string): Promise<Order[]> => {
  const { data } = await axiosInstance.get<Order[]>(`/order/user/${userId}`)

  return data
}

export {
  getOrder,
  getOrders,
  getOrdersByUser
}
