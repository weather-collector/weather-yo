import axios, {AxiosError} from 'axios'
import {toast} from 'react-toastify'
import $api from '../../../http'
import {AuthResponse} from '../../../models/response/AuthResponse'
import {AppDispatch} from '../../store'
import {loading, auth, logout as logoutAction} from '../AuthSlice'


export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
  dispatch(loading(true))
  try {
    const response = await $api.post<AuthResponse>(`/login`, {email, password})
    dispatch(auth(response.data))
    localStorage.setItem('token', response.data.accessToken)
    return true
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.response?.data?.message)
      return false
    }
  } finally {
    dispatch(loading(false))
  }
}

export const googleAuth = (token: string) => async (dispatch: AppDispatch) => {
  dispatch(loading(true))
  try {
    const response = await $api.post<AuthResponse>(`/google-auth`, {token})
    dispatch(auth(response.data))
    localStorage.setItem('token', response.data.accessToken)
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.response?.data?.message)
    }
  } finally {
    dispatch(loading(false))
  }
}

export const register = (email: string, password: string) => async (dispatch: AppDispatch) => {
  dispatch(loading(true))
  try {
    const response = await $api.post<AuthResponse>(`/registration`, {email, password})
    dispatch(auth(response.data))
    localStorage.setItem('token', response.data.accessToken)
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.response?.data?.message)
    }
  } finally {
    dispatch(loading(false))
  }
}

export const logout = () => async (dispatch: AppDispatch) => {
  dispatch(loading(true))
  try {
    await $api.post<AuthResponse>(`/logout`)
    dispatch(logoutAction())
    localStorage.removeItem('token')
  } catch (error) {
    if (error instanceof AxiosError) {}
  } finally {
    dispatch(loading(false))
  }
}

export const checkAuth = () => async (dispatch: AppDispatch) => {
  try {
    if (localStorage.getItem('token')) {
      const response = await axios.get<AuthResponse>(`${process.env.NEXT_PUBLIC_API_URL}/api/refresh`, {
        withCredentials: true,
      })
      localStorage.setItem('token', response.data.accessToken)
      dispatch(auth(response.data))
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      dispatch(logoutAction())
    }
  } finally {
    dispatch(loading(false))
  }
}

export const sendResetPasswordMail = async (email: string) => {
  try {
    const response = await axios.post<{message: string}>(`${process.env.NEXT_PUBLIC_API_URL}/api/send-reset-email`, {email})
    toast(response.data.message)
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.response?.data?.message)
    }
  }
}

export const changePassword = async (password: string, token: string) => {
  try {
    const response = await axios.post<{message: string}>(`${process.env.NEXT_PUBLIC_API_URL}/api/reset-password/${token}`, {password})
    toast(response.data.message)
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.response?.data?.message)
    }
  }
}

export const updatePassword = async (newPassword: string, currentPassword: string) => {
  try {
    const response = await $api.post<{message: string}>(`/update-password`, {
      newPassword, currentPassword
    })
    toast(response.data.message)
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.response?.data?.message)
    }
  }
}

export const sendNotificationEmail = async (theme: string, message: string) => {
  try {
    const response = await $api.post<{message: string}>(`/send-email`, {
      theme, message
    })
    toast(response.data.message)
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.response?.data?.message)
    }
  }
}
