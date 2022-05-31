import type {AppProps} from 'next/app'
import {useEffect} from 'react'
import {Provider} from 'react-redux'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'antd/dist/antd.css'
import PrivateRoute from '../src/components/PrivateRoute'
import {useAppDispatch} from '../src/hooks/redux'
import {checkAuth} from '../src/store/reducers/ActionCreators/authActions'
import {setupStore} from '../src/store/store'
import {GlobalStyles} from '../src/styles/globalStyles'


const store = setupStore()

function MyApp({Component, pageProps}: AppProps) {
  const protectedRoutes = ['/', '/analyze', '/reports', '/reports/[report]', '/settings']

  return (
    <Provider store={store}>
      <GlobalStyles />
      <ToastContainer limit={2} autoClose={5000} pauseOnHover={false} position={'bottom-right'} />
      <General />
      <PrivateRoute protectedRoutes={protectedRoutes}>
        <Component {...pageProps} />
      </PrivateRoute>
    </Provider>
  )
}

function General() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(checkAuth())
  }, [])

  return null
}

export default MyApp
