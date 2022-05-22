import {combineReducers, configureStore} from '@reduxjs/toolkit'
import authReducer from './reducers/AuthSlice'
import requestData from './reducers/RequestWeatherSlice'
import interfaceReducer from './reducers/InterfaceSlice'
import reportReducer from './reducers/ReportSlice'


const rootReducers = combineReducers({
  authReducer,
  requestData,
  interfaceReducer,
  reportReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  })
}

export type RootState = ReturnType<typeof  rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
