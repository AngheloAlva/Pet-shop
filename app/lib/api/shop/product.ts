import axiosInstance from '../../axios/axios-instance'

import type { CreateProduct, Product, UpdateProduct } from '@/types/shop/products.types'
import type { GetAllOfModel } from '@/types/shared/getAllOfModel'

const createProduct = async ({
  brandId, categoryId, description, images, lifeStage, miniDesc, name, options, petType, slug
}: CreateProduct): Promise<Product> => {
  const { data } = await axiosInstance.post<Product>(
    '/product', {
      slug,
      name,
      images,
      options,
      brandId,
      petType,
      miniDesc,
      lifeStage,
      categoryId,
      description
    }
  )

  return data
}

const getProducts = async ({
  isAvailable, limit, page
}: GetAllOfModel): Promise<Product[]> => {
  const { data } = await axiosInstance.get<Product[]>(
    `/product?isAvailable=${isAvailable}&limit=${limit}&page=${page}`
  )

  return data
}

const getProductById = async (id: string): Promise<Product> => {
  const { data } = await axiosInstance.get<Product>(
    `/product/${id}`
  )

  return data
}

const getProductBySlug = async (slug: string): Promise<Product> => {
  const { data } = await axiosInstance.get<Product>(
    `/product/by-slug/${slug}`
  )

  return data
}

const updateProduct = async ({
  brandId, categoryId, description, images, lifeStage, miniDesc, name, petType, slug
}: UpdateProduct): Promise<Product> => {
  const { data } = await axiosInstance.put<Product>(
    `/product/${slug}`, {
      slug,
      name,
      images,
      brandId,
      petType,
      miniDesc,
      lifeStage,
      categoryId,
      description
    }
  )

  return data
}

const deleteProduct = async (id: string): Promise<string> => {
  const { data } = await axiosInstance.delete<{ message: string }>(
    `/product/${id}`
  )

  return data.message
}

const activateProduct = async (id: string): Promise<string> => {
  const { data } = await axiosInstance.put<{ message: string }>(
    `/product/activate/${id}`
  )

  return data.message
}

export {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  activateProduct,
  getProductBySlug
}
