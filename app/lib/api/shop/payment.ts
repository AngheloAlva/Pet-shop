import type { CreatePayment } from '@/types/shop/payment.types'
import axiosInstance from '../../axios/axios-instance'

const createCheckoutSession = async ({
  orderId, productsCart, shippingMethod, userId
}: CreatePayment): Promise<string> => {
  const { data } = await axiosInstance.post<{ message: string }>(
    '/payment/checkout-session', {
      orderId,
      productsCart,
      shippingMethod,
      userId
    }
  )

  return data.message
}

export {
  createCheckoutSession
}
