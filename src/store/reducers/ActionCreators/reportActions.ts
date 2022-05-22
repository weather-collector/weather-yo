import {AxiosError} from 'axios'
import $api from '../../../http'
import {AppDispatch} from '../../store'
import {RequestData} from '../RequestWeatherSlice'


export const generateReport = ({locationName, latitude, longitude, dateRange}: RequestData) => async (dispatch: AppDispatch) => {
  try {
    const response = await $api.post(`${process.env.NEXT_PUBLIC_API_URL}/api/generate-report`, {
      latitude, longitude, dateRange, locationName,
    })
    return response.data.message
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data?.message)
      return false
    }
  }
}
