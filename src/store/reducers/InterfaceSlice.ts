import {createSlice, PayloadAction} from '@reduxjs/toolkit'


interface InterfaceSlice {
  isLoading: boolean
  isMenuOpen: boolean
}

const initialState: InterfaceSlice = {
  isLoading: false,
  isMenuOpen: false,
}

export const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    interfaceLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setIsMenuOpen(state, action: PayloadAction<boolean>) {
      state.isMenuOpen = action.payload
    }
  },
})

export const {interfaceLoading, setIsMenuOpen} = interfaceSlice.actions

export default interfaceSlice.reducer
