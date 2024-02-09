import axiosInstance from '../../axios/axios-instance'

import type { Brand, CreateBrand, UpdateBrand } from '@/types/shop/brand.types'
import type { GetAllOfModel } from '@/types/shared/getAllOfModel'

const createBrand = async ({
  image, name, slug, authId
}: CreateBrand): Promise<Brand> => {
  const { data } = await axiosInstance.post<Brand>(
    '/brand', {
      authId,
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

const getBrandById = async (brandId: string): Promise<Brand> => {
  const { data } = await axiosInstance.get<Brand>(
    `/brand/${brandId}`
  )

  return data
}

const getBrandBySlug = async (slug: string): Promise<Brand> => {
  const { data } = await axiosInstance.get<Brand>(
    `/brand/by-slug/${slug}`
  )

  return data
}

const updateBrand = async (brandId: string, {
  image, name, slug, authId
}: UpdateBrand): Promise<Brand> => {
  const { data } = await axiosInstance.put<Brand>(
    `/brand/${brandId}`, {
      authId,
      image,
      name,
      slug
    }
  )

  return data
}

const activateBrand = async (brandId: number, authId: string): Promise<Brand> => {
  const { data } = await axiosInstance.patch<Brand>(
    `/brand/activate/${brandId}`, {
      authId
    }
  )

  return data
}

const deleteBrand = async (brandId: number, authId: string): Promise<Brand> => {
  const { data } = await axiosInstance.delete<Brand>(
    `/brand/${brandId}`, {
      data: {
        authId
      }
    }
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
