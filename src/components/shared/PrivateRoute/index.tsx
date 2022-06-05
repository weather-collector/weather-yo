import dynamic from 'next/dynamic'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import {useAppSelector} from '../../../hooks/redux'


const GlobalLoader = dynamic(() => import("../Loaders/GlobalLoader"), {
  ssr: false,
})


// @ts-ignore
function PrivateRoute({protectedRoutes, children}) {
  const router = useRouter()
  const {isAuth, isLoading} = useAppSelector(state => state.authReducer)

  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1

  useEffect(() => {
    if (!isLoading && !isAuth && pathIsProtected) {
      router.push('/login')
    }
    if (!isLoading && isAuth && !pathIsProtected) {
      router.push('/')
    }
  }, [isLoading, isAuth, pathIsProtected])

  if ((isLoading || !isAuth) && pathIsProtected) {
    return <GlobalLoader />
  }

  return children
}

export default PrivateRoute
