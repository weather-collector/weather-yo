import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {baseDateRange} from '../../utils/dateConverters'


interface MapFormState {
  locationName: string
  latitude: number
  longitude: number
  dateRange: string
}

const initialState: MapFormState = {
  locationName: '',
  latitude: 49.59,
  longitude: 34.55,
  dateRange: baseDateRange,
}

export const mapFormSlice = createSlice({
  name: 'mapForm',
  initialState,
  reducers: {
    setMapFormData(state, action: PayloadAction<Omit<MapFormState, 'dateRange'>>) {
      state.locationName = action.payload.locationName
      state.latitude = action.payload.latitude
      state.longitude = action.payload.longitude
    },
    setMapFormDateRange(state, action: PayloadAction<string>) {
      state.dateRange = action.payload
    },
  },
})

export const {setMapFormData, setMapFormDateRange} = mapFormSlice.actions

export default mapFormSlice.reducer
