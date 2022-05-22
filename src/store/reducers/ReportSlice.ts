import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IWeatherData} from '../../models/IWeatherData'


interface ReportState {
  id?: string
  requestDate?: string
  requestRange: string
  latitude: number
  longitude: number
  address: string
  weatherData?: IWeatherData[]
}

const initialState: ReportState = {
  id: '',
  requestDate: '',
  requestRange: '',
  latitude: 0,
  longitude: 0,
  address: '',
  weatherData: [],
}

export const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    setReportData(state, action: PayloadAction<ReportState>) {
      state.id = action.payload.id
      state.requestDate = action.payload.requestDate
      state.requestRange = action.payload.requestRange
      state.latitude = action.payload.latitude
      state.longitude = action.payload.longitude
      state.address = action.payload.address
      state.weatherData = action.payload.weatherData
    }
  }
})

export default reportSlice.reducer
