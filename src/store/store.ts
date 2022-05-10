import {combineReducers, configureStore} from '@reduxjs/toolkit'
import authReducer from './reducers/AuthSlice'
import userReducer from './reducers/UserSlice'


const rootReducers = combineReducers({
  userReducer,
  authReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  })
}

export type RootState = ReturnType<typeof  rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
