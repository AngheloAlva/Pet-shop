import axiosInstance from '../../axios/axios-instance'

const login = async (email: string, password: string): Promise<{ token: string }> => {
  const { data } = await axiosInstance.post<{ token: string }>(
    '/auth/login', {
      email,
      password
    }
  )

  return data
}

const refreshAccessToken = async (): Promise<{ token: string }> => {
  const { data } = await axiosInstance.post<{ token: string }>(
    '/user/refresh-access-token'
  )

  return data
}

const logout = async (): Promise<{ message: string }> => {
  const { data } = await axiosInstance.post<{ message: string }>(
    '/auth/logout'
  )

  return data
}

const verifyEmail = async (
  email: string, code: string
): Promise<{ message: string }> => {
  const { data } = await axiosInstance.post<{ message: string }>(
    '/auth/verify-email', {
      email,
      code
    }
  )

  return data
}

const forgotPassword = async (email: string): Promise<{ message: string }> => {
  const { data } = await axiosInstance.post<{ message: string }>(
    '/auth/forgot-password', {
      email
    }
  )

  return data
}

const resetPassword = async (
  email: string, newPassword: string
): Promise<{ message: string }> => {
  const { data } = await axiosInstance.post<{ message: string }>(
    '/auth/reset-password', {
      email,
      newPassword
    }
  )

  return data
}

export {
  login,
  logout,
  verifyEmail,
  resetPassword,
  forgotPassword,
  refreshAccessToken
}
