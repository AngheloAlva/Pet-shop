import type { CreatePayment } from '@/types/shop/payment.types'
import axiosInstance from '../../axios/axios-instance'

const createCheckoutSession = async ({
  productsCart, shippingMethod, authId
}: CreatePayment): Promise<string> => {
  const { data } = await axiosInstance.post<{ message: string }>(
    '/payment/checkout-session', {
      productsCart,
      shippingMethod,
      authId
    }
  )

  return data.message
}

export {
  createCheckoutSession
}
