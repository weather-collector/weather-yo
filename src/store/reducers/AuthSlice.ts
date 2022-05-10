import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IUser} from '../../models/IUser'
import {AuthResponse} from '../../models/response/AuthResponse'


interface AuthState {
  user: IUser
  isAuth: boolean
  isLoading: boolean
}

const initialState: AuthState = {
  user: {} as IUser,
  isAuth: false,
  isLoading: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth(state, action: PayloadAction<AuthResponse>) {
      state.user = action.payload.user
      state.isAuth = true
    },
    logout(state) {
      state.user = {} as IUser
      state.isAuth = false
    },
    loading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    }
  }
})

export default authSlice.reducer
