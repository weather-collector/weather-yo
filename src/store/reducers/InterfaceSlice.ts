import {createSlice, PayloadAction} from '@reduxjs/toolkit'


interface InterfaceSlice {
  isLoading: boolean
  isToastActive: boolean
}

const initialState: InterfaceSlice = {
  isLoading: false,
  isToastActive: false
}

export const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    toast(state, action: PayloadAction<boolean>) {
      state.isToastActive = action.payload
    },
    loading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    }
  }
})

export default interfaceSlice.reducer
