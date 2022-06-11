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
    interfaceLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
  },
})

export const {interfaceLoading} = interfaceSlice.actions

export default interfaceSlice.reducer
