import {combineReducers, configureStore} from '@reduxjs/toolkit'
import authReducer from './reducers/AuthSlice'
import mapFormReducer from './reducers/MapFormSlice'
import interfaceReducer from './reducers/InterfaceSlice'
import reportReducer from './reducers/ReportSlice'


const rootReducers = combineReducers({
  authReducer,
  mapFormReducer,
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
