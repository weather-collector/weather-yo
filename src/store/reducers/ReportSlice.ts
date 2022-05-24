import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ReportResponse} from '../../models/response/ReportResponse'


interface ReportState extends ReportResponse {}

const initialState: ReportState = {
  id: '',
  requestDate: '',
  dateRange: '',
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
      state.dateRange = action.payload.dateRange
      state.latitude = action.payload.latitude
      state.longitude = action.payload.longitude
      state.address = action.payload.address
      state.weatherData = action.payload.weatherData
    }
  }
})

export default reportSlice.reducer
