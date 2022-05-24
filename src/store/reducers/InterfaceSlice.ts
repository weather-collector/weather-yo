import {createSlice, PayloadAction} from '@reduxjs/toolkit'


interface InterfaceSlice {
  isLoading: boolean
}

const initialState: InterfaceSlice = {
  isLoading: false,
}

export const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    loading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    }
  }
})

export default interfaceSlice.reducer
