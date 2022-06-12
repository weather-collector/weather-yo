import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {weatherIndicators} from '../../components/reportsPage/ValuePicker/constants'
import {IWeatherIndicator} from '../../models/IWeatherIndicator'
import {ReportResponse} from '../../models/response/ReportResponse'


interface ReportState extends ReportResponse {
  selectedIndicators: IWeatherIndicator[],
  averagingAmount: number
}

const initialState: ReportState = {
  id: '',
  requestDate: '',
  dateRange: '',
  latitude: 0,
  longitude: 0,
  address: '',
  weatherData: [],
  selectedIndicators: weatherIndicators,
  averagingAmount: 1,
}

export const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    setReportData(state, action: PayloadAction<ReportResponse>) {
      state.id = action.payload.id
      state.requestDate = action.payload.requestDate
      state.dateRange = action.payload.dateRange
      state.latitude = action.payload.latitude
      state.longitude = action.payload.longitude
      state.address = action.payload.address
      state.weatherData = action.payload.weatherData.filter(el => el.temp)
    },
    setSelectedIndicators(state, action: PayloadAction<IWeatherIndicator[]>) {
      state.selectedIndicators = action.payload
    },
    setAveragingAmount(state, action: PayloadAction<number>) {
      state.averagingAmount = action.payload
    },
  },
})

export const {setReportData, setSelectedIndicators, setAveragingAmount} = reportSlice.actions

export default reportSlice.reducer
