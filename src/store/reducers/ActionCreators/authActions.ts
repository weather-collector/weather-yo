import axios, {AxiosError} from 'axios'
import {toast} from 'react-toastify'
import $api from '../../../http'
import {AuthResponse} from '../../../models/response/AuthResponse'
import {AppDispatch} from '../../store'
import {authSlice} from '../AuthSlice'


export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
  dispatch(authSlice.actions.loading(true))
  try {
    const response = await $api.post<AuthResponse>(`/login`, {email, password})
    dispatch(authSlice.actions.auth(response.data))
    localStorage.setItem('token', response.data.accessToken)
    return true
  } catch (error) {
    if (error instanceof AxiosError){
      toast(error.response?.data?.message)
      return false
    }
  } finally {
    dispatch(authSlice.actions.loading(false))
  }
}

export const register = (email: string, password: string) => async (dispatch: AppDispatch) => {
  dispatch(authSlice.actions.loading(true))
  try {
    const response = await $api.post<AuthResponse>(`/registration`, {email, password})
    dispatch(authSlice.actions.auth(response.data))
    localStorage.setItem('token', response.data.accessToken)
    return true
  } catch (error) {
    if (error instanceof AxiosError){
      toast(error.response?.data?.message)
      return false
    }
  } finally {
    dispatch(authSlice.actions.loading(false))
  }
}

export const logout = () => async (dispatch: AppDispatch) => {
  dispatch(authSlice.actions.loading(true))
  try {
    const response = await $api.post<AuthResponse>(`/logout`)
    dispatch(authSlice.actions.logout())
    localStorage.removeItem('token')
    return true
  } catch (error) {
    if (error instanceof AxiosError){
      return false
    }
  } finally {
    dispatch(authSlice.actions.loading(false))
  }
}

export const checkAuth = () => async (dispatch: AppDispatch) => {
  dispatch(authSlice.actions.loading(true))
  try {
    const response = await axios.get<AuthResponse>(`${process.env.NEXT_PUBLIC_API_URL}/api/refresh`, {
      withCredentials: true
    })
    dispatch(authSlice.actions.auth(response.data))
  } catch(error) {
    if (error instanceof AxiosError){
      dispatch(authSlice.actions.logout())
      localStorage.removeItem('token')
    }
  } finally {
    dispatch(authSlice.actions.loading(false))
  }
}

export const sendResetPasswordMail = async (email: string) => {
  try {
    const response = await axios.post<{message: string}>(`${process.env.NEXT_PUBLIC_API_URL}/api/send-reset-email`, {email})
    toast(response.data.message)
  } catch (error) {
    if (error instanceof AxiosError){
      toast(error.response?.data?.message)
    }
  }
}

export const changePassword = async (password: string, token: string) => {
  try {
    const response = await axios.post<{message: string}>(`${process.env.NEXT_PUBLIC_API_URL}/api/reset-password/${token}`, {password})
    toast(response.data.message)
  } catch (error) {
    if (error instanceof AxiosError){
      toast(error.response?.data?.message)
    }
  }
}
