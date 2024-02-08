import type { Address, CreateAddress, UpdateAddress } from '@/types/user/address.types'
import axiosInstance from '../../axios/axios-instance'

const createAddress = async ({
  apartmentNumber, commune, isApartment, name, number, region, street, authId, zipCode
}: CreateAddress): Promise<string> => {
  const { data } = await axiosInstance.post<{ message: string }>(
    '/address', {
      name,
      number,
      region,
      street,
      authId,
      zipCode,
      commune,
      isApartment,
      apartmentNumber
    }
  )

  return data.message
}

const getAddressByUser = async (userId: string): Promise<Address[]> => {
  const { data } = await axiosInstance.get<Address[]>(
    `/address/by-user/${userId}`
  )

  return data
}

const getAdressById = async (id: string): Promise<Address> => {
  const { data } = await axiosInstance.get<Address>(
    `/address/${id}`
  )

  return data
}

const updateAddress = async (id: number, {
  apartmentNumber, commune, isApartment, name, number, region, street, zipCode
}: UpdateAddress): Promise<string> => {
  const { data } = await axiosInstance.put<{ message: string }>(
    `/address/${id}`, {
      name,
      number,
      region,
      street,
      zipCode,
      commune,
      isApartment,
      apartmentNumber
    }
  )

  return data.message
}

const deleteAddress = async (id: number): Promise<string> => {
  const { data } = await axiosInstance.delete<{ message: string }>(
    `/address/${id}`
  )

  return data.message
}

export {
  getAdressById,
  createAddress,
  updateAddress,
  deleteAddress,
  getAddressByUser
}
