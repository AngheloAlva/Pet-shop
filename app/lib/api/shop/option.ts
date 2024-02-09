import axiosInstance from '../../axios/axios-instance'

import type { UpdateOption } from '@/types/shop/option.types'

const updteOption = async (id: number, {
  discount, price, stock, authId
}: UpdateOption): Promise<string> => {
  const { data } = await axiosInstance.put<{ message: string }>(
    `/option/${id}`, {
      discount,
      authId,
      price,
      stock
    }
  )

  return data.message
}

const deleteOption = async (id: number, authId: string): Promise<string> => {
  const { data } = await axiosInstance.delete<{ message: string }>(
    `/option/${id}`, {
      data: {
        authId
      }
    }
  )

  return data.message
}

export {
  updteOption,
  deleteOption
}
