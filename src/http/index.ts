import axios, {AxiosError} from 'axios'
import {toast} from 'react-toastify'
import {AuthResponse} from '../models/response/AuthResponse'


const $api = axios.create({
  withCredentials: true,
  baseURL: process.env.API_URL
})


$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
  }
})

$api.interceptors.request.use((config) => {
  return config
}, async (error) => {
  const originalRequest = error.config

  if (error.response.status === 401 && !error?.config?._isRetry) {
    originalRequest._isRetry = true
    try {
      const response = await axios.get<AuthResponse>(`${process.env.NEXT_PUBLIC_API_URL}/api/refresh`, {
        withCredentials: true
      })
      localStorage.setItem('token', response.data.accessToken)
      return $api.request(originalRequest)
    } catch(error) {
      if (error instanceof AxiosError){
        toast(error.response?.data?.message)
      }
    }
  }
  throw error
})


export default $api
