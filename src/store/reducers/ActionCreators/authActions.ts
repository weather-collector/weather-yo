import axios, {AxiosError} from 'axios'
import {useEffect} from 'react'
import {toast} from 'react-toastify'
import $api from '../../../http'
import {AuthResponse} from '../../../models/response/AuthResponse'
import {AppDispatch} from '../../store'
import {authSlice} from '../AuthSlice'
import {interfaceSlice} from '../InterfaceSlice'


export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await $api.post<AuthResponse>(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {email, password})
    dispatch(authSlice.actions.auth(response.data))
    localStorage.setItem('token', response.data.accessToken)
    return true
  } catch (error) {
    if (error instanceof AxiosError){
      toast(error.response?.data?.message)
      return false
    }
  }
}

export const register = (email: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await $api.post<AuthResponse>(`${process.env.NEXT_PUBLIC_API_URL}/api/registration`, {email, password})
    dispatch(authSlice.actions.auth(response.data))
    localStorage.setItem('token', response.data.accessToken)
    return true
  } catch (error) {
    if (error instanceof AxiosError){
      toast(error.response?.data?.message)
      return false
    }
  }
}

export const logout = () => async (dispatch: AppDispatch) => {
  try {
    const response = await $api.post<AuthResponse>(`${process.env.NEXT_PUBLIC_API_URL}/api/logout`)
    dispatch(authSlice.actions.logout())
    localStorage.removeItem('token')
    document.location.replace(process.env.NEXT_PUBLIC_CLIENT_URL!)
    return true
  } catch (error) {
    if (error instanceof AxiosError){
      console.log(error.response?.data?.message)
      return false
    }
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
      // toast(error.response?.data?.message)
    }
  } finally {
    dispatch(authSlice.actions.loading(false))
  }
}

export const sendResetPasswordMail = async (email: string) => {
  try {
    const response = await $api.post<{message: string}>(`${process.env.NEXT_PUBLIC_API_URL}/api/send-reset-email`, {email})
    toast(response.data.message)
  } catch (error) {
    if (error instanceof AxiosError){
      toast(error.response?.data?.message)
    }
  }
}

export const changePassword = async (password: string, token: string) => {
  try {
    const response = await $api.post<{message: string}>(`${process.env.NEXT_PUBLIC_API_URL}/api/reset-password/${token}`, {password})
    toast(response.data.message)
  } catch (error) {
    if (error instanceof AxiosError){
      toast(error.response?.data?.message)
    }
  }
}
