import type {AppProps} from 'next/app'
import {useEffect} from 'react'
import {Provider} from 'react-redux'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import GlobalLoader from '../src/components/shared/Loaders/GlobalLoader'
import {useAppDispatch, useAppSelector} from '../src/hooks/redux'
import {checkAuth} from '../src/store/reducers/ActionCreators/authActions'
import {authSlice} from '../src/store/reducers/AuthSlice'
import {setupStore} from '../src/store/store'
import {GlobalStyles} from '../src/styles/globalStyles'


const store = setupStore()

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <General />
      <ToastContainer limit={2} autoClose={5000} pauseOnHover={false} position={'bottom-right'} />
      <Component {...pageProps} />
    </Provider>
  )
}

function General() {
  const dispatch = useAppDispatch()
  const {isLoading} = useAppSelector(state => state.authReducer)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth())
    } else {
      dispatch(authSlice.actions.loading(false))
    }
  }, [])

  if (isLoading) {
    return <GlobalLoader />
  }
  return null
}

export default MyApp
