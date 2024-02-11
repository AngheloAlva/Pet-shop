import axiosInstance from '../../axios/axios-instance'

import type { GetAllOfModel } from '@/types/shared/getAllOfModel'
import type { User, CreateUser, UpdateUser } from '@/types/user/user.types'

const createUser = async ({
  email, authId
}: CreateUser): Promise<{ message: string }> => {
  const { data } = await axiosInstance.post<{ message: string }>(
    '/user', {
      email,
      authId
    }
  )

  return data
}

const getUsers = async (authId: string, {
  isAvailable, limit, page
}: GetAllOfModel): Promise<{ total: number, users: User[] }> => {
  const { data } = await axiosInstance.get<{ total: number, users: User[] }>(
    `/user?page=${page}&limit=${limit}&isAvailable=${isAvailable}&authId=${authId}`
  )

  return data
}

const getUserById = async (authId: string): Promise<User> => {
  const { data } = await axiosInstance.get<User>(
    `/user/${authId}`
  )

  return data
}

const getUserByEmail = async (email: string): Promise<User> => {
  const { data } = await axiosInstance.get<User>(
    `/user/by-email/${email}`
  )

  return data
}

const updateUser = async (id: string, {
  email, lastName, name, password, phone, rut
}: UpdateUser): Promise<{ message: string }> => {
  const { data } = await axiosInstance.put<{ message: string }>(
    `/user/${id}`, {
      rut,
      name,
      email,
      phone,
      lastName,
      password
    }
  )

  return data
}

const activateUser = async (id: string): Promise<{ message: string }> => {
  const { data } = await axiosInstance.patch<{ message: string }>(
    `/user/activate/${id}`
  )

  return data
}

const deleteUser = async (id: string): Promise<{ message: string }> => {
  const { data } = await axiosInstance.delete<{ message: string }>(
    `/user/${id}`
  )

  return data
}

export {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  activateUser,
  getUserByEmail
}
