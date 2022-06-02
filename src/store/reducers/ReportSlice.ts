import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {weatherIndicators} from '../../components/reportsPage/ValuePicker/constants'
import {IWeatherIndicator} from '../../models/IWeatherIndicator'
import {ReportResponse} from '../../models/response/ReportResponse'


interface ReportState extends ReportResponse {
  selectedIndicators?: IWeatherIndicator[]
}

const initialState: ReportState = {
  id: '',
  requestDate: '',
  dateRange: '',
  latitude: 0,
  longitude: 0,
  address: '',
  weatherData: [],
  selectedIndicators: weatherIndicators
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
    },
    setSelectedIndicators(state, action: PayloadAction<IWeatherIndicator[]>) {
      state.selectedIndicators = action.payload
    }
  }
})

export default reportSlice.reducer
