import axiosInstance from '../../axios/axios-instance'

import type { AddProductToCart, Cart } from '@/types/user/cart.types'

const createCart = async (userId: number): Promise<{ message: string }> => {
  const { data } = await axiosInstance.post<{ message: string }>(
    '/cart', { userId }
  )

  return data
}

const addProductToCart = async ({
  cartId, optionSelectedIndex, productId, quantity, userId
}: AddProductToCart): Promise<{ message: string }> => {
  const { data } = await axiosInstance.post<{ message: string }>(
    '/cart/add-product', {
      cartId,
      optionSelectedIndex,
      productId,
      quantity,
      userId
    }
  )

  return data
}

const getCart = async (userId: number): Promise<Cart> => {
  const { data } = await axiosInstance.get<Cart>(
    `/cart/${userId}`
  )

  return data
}

interface CartInCheckoutResponse {
  cart: Cart
  stockChanged: boolean
  optionChanged: boolean
}

const getCartInCheckout = async (userId: number): Promise<CartInCheckoutResponse> => {
  const { data } = await axiosInstance.get<CartInCheckoutResponse>(
    `/cart/checkout/${userId}`
  )

  return data
}

const updateProductQuantity = async (
  userId: number,
  productId: number,
  quantity: number
): Promise<{ message: string }> => {
  const { data } = await axiosInstance.put<{ message: string }>(
    '/cart/update-product-quantity', {
      productId,
      quantity,
      userId
    }
  )

  return data
}

const removeProductFromCart = async (
  userId: number,
  productId: number
): Promise<{ message: string }> => {
  const { data } = await axiosInstance.delete<{ message: string }>(
    '/cart/remove-product', {
      data: {
        productId,
        userId
      }
    }
  )

  return data
}

const deleteCart = async (userId: number): Promise<{ message: string }> => {
  const { data } = await axiosInstance.delete<{ message: string }>(
    '/cart/', {
      data: {
        userId
      }
    }
  )

  return data
}

export {
  getCart,
  createCart,
  deleteCart,
  addProductToCart,
  getCartInCheckout,
  removeProductFromCart,
  updateProductQuantity
}
