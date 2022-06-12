import axios, {AxiosError} from 'axios'
import {toast} from 'react-toastify'
import { round } from '../../../utils/weather'
import {AppDispatch} from '../../store'
import {interfaceLoading} from '../InterfaceSlice'
import {setMapFormData} from '../MapFormSlice'


type setFromMapToFormProps = {
  latitude: number
  longitude: number
}

type setFromFormToMapProps = {
  locationName: string
}

export const setFromMapToForm = ({latitude, longitude}: setFromMapToFormProps) => async (dispatch: AppDispatch) => {
  dispatch(interfaceLoading(true))
  try {
    const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?language=uk&types=place,region&access_token=${process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN}`)
    dispatch(setMapFormData({
      locationName: response.data?.features[0]?.text_uk || '',
      latitude: round(latitude),
      longitude: round(longitude),
    }))
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.response?.data?.message)
    }
  } finally {
    dispatch(interfaceLoading(false))
  }
}

export const setFromFormToMap = ({locationName}: setFromFormToMapProps) => async (dispatch: AppDispatch) => {
  dispatch(interfaceLoading(true))
  try {
    const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${locationName}.json?access_token=${process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN}`)
    let coordinates = response.data?.features[0]?.center
    // @ts-ignore
    dispatch(setMapFormData({
      latitude: round(coordinates[1]),
      longitude: round(coordinates[0]),
    }))
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.response?.data?.message)
    }
  } finally {
    dispatch(interfaceLoading(false))
  }
}
