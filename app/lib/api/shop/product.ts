import axiosInstance from '../../axios/axios-instance'

import type { CreateProduct, Product, UpdateProduct } from '@/types/shop/products.types'
import type { GetProductsWithFilters } from '@/types/shared/getProductsWithFilters'

const createProduct = async ({
  brandId, categoryId, description, images, lifeStage, miniDesc, name, options, petType, slug, authId
}: CreateProduct): Promise<Product> => {
  const { data } = await axiosInstance.post<Product>(
    '/product', {
      slug,
      name,
      authId,
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

interface GetProducts extends GetProductsWithFilters {
  isAvailable: boolean
  page: number
  limit: number
}

const getProducts = async ({
  page,
  limit,
  search,
  petType,
  maxPrice,
  minPrice,
  lifeStage,
  brandSlug,
  isAvailable,
  categorySlug
}: GetProducts): Promise<{ products: Product[], total: number }> => {
  const { data } = await axiosInstance.get<{ products: Product[], total: number }>(
    '/product' +
      `?page=${page}` +
      `&limit=${limit}` +
      `&isAvailable=${isAvailable}` +
      ((search != null) ? `&search=${search}` : '') +
      ((petType != null) ? `&petType=${petType}` : '') +
      ((brandSlug != null) ? `&brandSlug=${brandSlug}` : '') +
      ((maxPrice != null) ? `&maxPrice=${maxPrice}` : '') +
      ((minPrice != null) ? `&minPrice=${minPrice}` : '') +
      ((lifeStage != null) ? `&lifeStage=${lifeStage}` : '') +
      ((categorySlug != null) ? `&categorySlug=${categorySlug}` : '')
  )

  return data
}

const getProductById = async (id: number): Promise<Product> => {
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
  brandId, categoryId, description, images, lifeStage, miniDesc, name, petType, slug, authId
}: UpdateProduct): Promise<Product> => {
  const { data } = await axiosInstance.put<Product>(
    `/product/${slug}`, {
      slug,
      name,
      authId,
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

const deleteProduct = async (id: number, authId: string): Promise<string> => {
  const { data } = await axiosInstance.delete<{ message: string }>(
    `/product/${id}`, {
      data: {
        authId
      }
    }
  )

  return data.message
}

const activateProduct = async (id: number, authId: string): Promise<string> => {
  const { data } = await axiosInstance.put<{ message: string }>(
    `/product/activate/${id}`, {
      authId
    }
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
