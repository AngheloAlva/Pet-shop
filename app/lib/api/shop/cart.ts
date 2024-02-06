import axiosInstance from '../../axios/axios-instance'

import type { ProductCartResponse } from '@/types/user/product-cart.types'
import type { AddProductToCart, Cart } from '@/types/user/cart.types'

const addProductToCart = async ({
  optionSelectedIndex, productId, quantity, authId
}: AddProductToCart): Promise<ProductCartResponse> => {
  const { data } = await axiosInstance.post<ProductCartResponse>(
    '/cart/add-product', {
      optionSelectedIndex,
      productId,
      quantity,
      authId
    }
  )

  return data
}

const getCart = async (authId: string): Promise<Cart> => {
  const { data } = await axiosInstance.get<Cart>(
    `/cart/${authId}`
  )

  return data
}

interface CartInCheckoutResponse {
  cart: Cart
  stockChanged: boolean
  optionChanged: boolean
}

const getCartInCheckout = async (authId: string): Promise<CartInCheckoutResponse> => {
  const { data } = await axiosInstance.get<CartInCheckoutResponse>(
    `/cart/checkout/${authId}`
  )

  return data
}

const updateProductQuantity = async (
  authId: string,
  productId: number,
  quantity: number
): Promise<{ message: string }> => {
  const { data } = await axiosInstance.put<{ message: string }>(
    '/cart/update-product-quantity', {
      productId,
      quantity,
      authId
    }
  )

  return data
}

const removeProductFromCart = async (
  authId: string,
  productId: number,
  optionSelectedIndex: number
): Promise<{ message: string }> => {
  const { data } = await axiosInstance.delete<{ message: string }>(
    '/cart/remove-product', {
      data: {
        authId,
        productId,
        optionSelectedIndex
      }
    }
  )

  return data
}

const deleteCart = async (authId: string): Promise<{ message: string }> => {
  const { data } = await axiosInstance.delete<{ message: string }>(
    '/cart/', {
      data: {
        authId
      }
    }
  )

  return data
}

export {
  getCart,
  deleteCart,
  addProductToCart,
  getCartInCheckout,
  removeProductFromCart,
  updateProductQuantity
}
