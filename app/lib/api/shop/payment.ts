import type { CreatePayment } from '@/types/shop/payment.types'
import axiosInstance from '../../axios/axios-instance'

const createCheckoutSession = async ({
  shippingMethod, authId
}: CreatePayment): Promise<string> => {
  const { data } = await axiosInstance.post<{ url: string }>(
    '/payment/checkout-session', {
      shippingMethod,
      authId
    }
  )

  return data.url
}

export {
  createCheckoutSession
}
