import axiosInstance from '../../axios/axios-instance'

import type { UpdateOption } from '@/types/shop/option.types'

const updteOption = async (id: number, {
  discount, price, stock
}: UpdateOption): Promise<string> => {
  const { data } = await axiosInstance.put<{ message: string }>(
    `/option/${id}`, {
      discount,
      price,
      stock
    }
  )

  return data.message
}

const deleteOption = async (id: number): Promise<string> => {
  const { data } = await axiosInstance.delete<{ message: string }>(
    `/option/${id}`
  )

  return data.message
}

export {
  updteOption,
  deleteOption
}
