import axiosInstance from '../../axios/axios-instance'

import type { Category, CreateCategory, UpdateCategory } from '@/types/shop/category.types'
import type { GetAllOfModel } from '@/types/shared/getAllOfModel'

const createCategory = async ({
  description, image, name, slug
}: CreateCategory): Promise<Category> => {
  const { data } = await axiosInstance.post<Category>(
    '/category', {
      description,
      image,
      name,
      slug
    }
  )

  return data
}

const getCategories = async ({
  isAvailable, limit, page
}: GetAllOfModel): Promise<Category[]> => {
  const { data } = await axiosInstance.get<Category[]>(
    `/category?isAvailable=${isAvailable}&limit=${limit}&page=${page}`
  )

  return data
}

const getCategoryById = async (id: string): Promise<Category> => {
  const { data } = await axiosInstance.get<Category>(
    `/category/${id}`
  )

  return data
}

const getCategoryBySlug = async (slug: string): Promise<Category> => {
  const { data } = await axiosInstance.get<Category>(
    `/category/by-slug/${slug}`
  )

  return data
}

const updateCategory = async (id: number, {
  description, image, name, slug
}: UpdateCategory): Promise<string> => {
  const { data } = await axiosInstance.put<{ message: string }>(
    `/category/${id}`, {
      description,
      image,
      name,
      slug
    }
  )

  return data.message
}

const activateCategory = async (id: number): Promise<string> => {
  const { data } = await axiosInstance.put<{ message: string }>(
    `/category/activate/${id}`
  )

  return data.message
}

const deleteCategory = async (id: number): Promise<string> => {
  const { data } = await axiosInstance.delete<{ message: string }>(
    `/category/${id}`
  )

  return data.message
}

export {
  getCategories,
  updateCategory,
  deleteCategory,
  createCategory,
  getCategoryById,
  activateCategory,
  getCategoryBySlug
}
