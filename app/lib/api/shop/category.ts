import axiosInstance from '../../axios/axios-instance'

import type { Category, CreateCategory, UpdateCategory } from '@/types/shop/category.types'
import type { GetAllOfModel } from '@/types/shared/getAllOfModel'

const createCategory = async ({
  description, image, name, slug, authId, petType
}: CreateCategory): Promise<Category> => {
  const { data } = await axiosInstance.post<Category>(
    '/category', {
      description,
      petType,
      authId,
      image,
      name,
      slug
    }
  )

  return data
}

const getCategories = async ({
  isAvailable, limit, page
}: GetAllOfModel): Promise<{ total: number, categories: Category[] }> => {
  const { data } = await axiosInstance.get<{ total: number, categories: Category[] }>(
    `/category?isAvailable=${isAvailable}&limit=${limit}&page=${page}`
  )

  return data
}

const getCategoryById = async (categoryId: number): Promise<Category> => {
  const { data } = await axiosInstance.get<Category>(
    `/category/${categoryId}`
  )

  return data
}

const getCategoryBySlug = async (slug: string): Promise<Category> => {
  const { data } = await axiosInstance.get<Category>(
    `/category/by-slug/${slug}`
  )

  return data
}

const updateCategory = async (categoryId: number, {
  description, image, name, slug, authId
}: UpdateCategory): Promise<string> => {
  const { data } = await axiosInstance.put<{ message: string }>(
    `/category/${categoryId}`, {
      description,
      authId,
      image,
      name,
      slug
    }
  )

  return data.message
}

const activateCategory = async (categoryId: number, authId: string): Promise<string> => {
  const { data } = await axiosInstance.patch<{ message: string }>(
    `/category/activate/${categoryId}`, {
      authId
    }
  )

  return data.message
}

const deleteCategory = async (categoryId: number, authId: string): Promise<string> => {
  const { data } = await axiosInstance.delete<{ message: string }>(
    `/category/${categoryId}`, {
      data: {
        authId
      }
    }
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
