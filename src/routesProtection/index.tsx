import dynamic from 'next/dynamic'
import {useRouter} from 'next/router'
import React, {useEffect} from 'react'
import {useAppSelector} from '../hooks/redux'

const GlobalLoader = dynamic(() => import("../components/shared/Loaders/GlobalLoader"), {
  ssr: false,
})


export const withPublic = (WrappedComponent: any) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    const router = useRouter()
    const {isAuth, isLoading} = useAppSelector(state => state.authReducer)

    useEffect(() => {
      if (isAuth && !isLoading) {
        router.push('/')
      }
    }, [isAuth, isLoading])

    if (isLoading) {
      return <GlobalLoader />
    }
    // @ts-ignore
    return <WrappedComponent {...props} />
  }
}

export const withProtected = (WrappedComponent: any) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    const router = useRouter()
    const {isAuth, isLoading} = useAppSelector(state => state.authReducer)

    useEffect(() => {
      if (!isAuth && !isLoading) {
        router.push('/login')
      }
    }, [isAuth, isLoading])

    if (isLoading) {
      return <GlobalLoader />
    }
    // @ts-ignore
    return <WrappedComponent {...props} />
  }
}
