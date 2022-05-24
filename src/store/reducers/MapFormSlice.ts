import {createSlice, PayloadAction} from '@reduxjs/toolkit'


interface MapFormState {
  locationName: string
  latitude: number
  longitude: number
  dateRange?: string
}

const initialState: MapFormState = {
  locationName: '',
  latitude: 0,
  longitude: 0,
  dateRange: '',
}

export const mapFormSlice = createSlice({
  name: 'mapForm',
  initialState,
  reducers: {
    setMapFormData(state, action: PayloadAction<MapFormState>) {
      state.locationName = action.payload.locationName
      state.latitude = action.payload.latitude
      state.longitude = action.payload.longitude
      state.dateRange = action.payload.dateRange
    }
  }
})

export default mapFormSlice.reducer
