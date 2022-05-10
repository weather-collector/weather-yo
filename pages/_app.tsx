import type {AppProps} from 'next/app'
import {useEffect, useState} from 'react'
import {Provider} from 'react-redux'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import GlobalLoader from '../src/components/shared/Loaders/GlobalLoader'
import {useAppDispatch, useAppSelector} from '../src/hooks/redux'
import {checkAuth} from '../src/store/reducers/ActionCreators/authActions'
import {setupStore} from '../src/store/store'
import {GlobalStyles} from '../src/styles/globalStyles'


const store = setupStore()

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <General />
      <ToastContainer limit={2} pauseOnHover={false} position={'bottom-right'} />
      <Component {...pageProps} />
    </Provider>
  )
}

function General() {
  const [loading, setLoading] = useState(true)
  const dispatch = useAppDispatch()
  const {isLoading} = useAppSelector(state => state.authReducer)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth())
    }
  }, [])

  useEffect(() => {
    setLoading(false)
  }, [isLoading])

  if (isLoading || loading) {
    return <GlobalLoader />
  }

  return null
}

export default MyApp
