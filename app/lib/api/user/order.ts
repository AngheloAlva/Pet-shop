import axiosInstance from '../../axios/axios-instance'

import type { Order } from '@/types/user/order.types'

const getOrders = async (page = 1, limit = 10): Promise<Order[]> => {
  const { data } = await axiosInstance.get<Order[]>(
    `/order?page=${page}&limit=${limit}`
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
