import axiosInstance from '../../axios/axios-instance'

import type { Brand, CreateBrand, UpdateBrand } from '@/types/shop/brand.types'
import type { GetAllOfModel } from '@/types/shared/getAllOfModel'

const createBrand = async ({
  image, name, slug
}: CreateBrand): Promise<Brand> => {
  const { data } = await axiosInstance.post<Brand>(
    '/brand', {
      image,
      name,
      slug
    }
  )

  return data
}

const getBrands = async ({
  isAvailable, limit, page
}: GetAllOfModel): Promise<Brand[]> => {
  const { data } = await axiosInstance.get<Brand[]>(
    `/brand?isAvailable=${isAvailable}&limit=${limit}&page=${page}`
  )

  return data
}

const getBrandById = async (id: string): Promise<Brand> => {
  const { data } = await axiosInstance.get<Brand>(
    `/brand/${id}`
  )

  return data
}

const getBrandBySlug = async (slug: string): Promise<Brand> => {
  const { data } = await axiosInstance.get<Brand>(
    `/brand/by-slug/${slug}`
  )

  return data
}

const updateBrand = async (id: string, {
  image, name, slug
}: UpdateBrand): Promise<Brand> => {
  const { data } = await axiosInstance.put<Brand>(
    `/brand/${id}`, {
      image,
      name,
      slug
    }
  )

  return data
}

const activateBrand = async (id: string): Promise<Brand> => {
  const { data } = await axiosInstance.patch<Brand>(
    `/brand/activate/${id}`
  )

  return data
}

const deleteBrand = async (id: string): Promise<Brand> => {
  const { data } = await axiosInstance.delete<Brand>(
    `/brand/${id}`
  )

  return data
}

export {
  getBrands,
  updateBrand,
  deleteBrand,
  createBrand,
  getBrandById,
  activateBrand,
  getBrandBySlug
}
