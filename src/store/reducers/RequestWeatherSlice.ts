import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IUser} from '../../models/IUser'
import {AuthResponse} from '../../models/response/AuthResponse'


export interface RequestData {
  locationName: string
  latitude: number
  longitude: number
  dateRange?: string
  isLoading?: boolean
}

const initialState: RequestData = {
  locationName: '',
  latitude: 0,
  longitude: 0,
  dateRange: '',
  isLoading: false,
}

export const requestWeatherSlice = createSlice({
  name: 'requestData',
  initialState,
  reducers: {
    setRequestData(state, action: PayloadAction<RequestData>) {
      state.locationName = action.payload.locationName
      state.latitude = action.payload.latitude
      state.longitude = action.payload.longitude
    },
    loading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    }
  }
})

export default requestWeatherSlice.reducer
