import axios, {AxiosError} from 'axios'
import {toast} from 'react-toastify'
import {AppDispatch} from '../../store'
import {interfaceSlice} from '../InterfaceSlice'
import {mapFormSlice} from '../MapFormSlice'


type setFromMapToFormProps = {
  latitude: number
  longitude: number
}

type setFromFormToMapProps = {
  locationName: string
  latitude: number
  longitude: number
  dateRange: string
}

export const setFromMapToForm = ({latitude, longitude}: setFromMapToFormProps) => async (dispatch: AppDispatch) => {
  dispatch(interfaceSlice.actions.loading(true))
  try {
    const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?language=uk&types=place,region&access_token=${process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN}`)
    dispatch(mapFormSlice.actions.setMapFormData({
      locationName: response.data?.features[0]?.text_uk || '',
      latitude: Math.round(latitude * 100) / 100,
      longitude: Math.round(longitude * 100) / 100,
    }))
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.response?.data?.message)
    }
  } finally {
    dispatch(interfaceSlice.actions.loading(false))
  }
}

export const setFromFormToMap = ({locationName, latitude, longitude, dateRange}: setFromFormToMapProps) => async (dispatch: AppDispatch) => {
  try {
    // here will be geocoding stuff
    dispatch(mapFormSlice.actions.setMapFormData({
      locationName: locationName,
      latitude: Math.round(latitude * 100) / 100,
      longitude: Math.round(longitude * 100) / 100,
      dateRange: dateRange
    }))
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.response?.data?.message)
    }
  } finally {

  }
}
