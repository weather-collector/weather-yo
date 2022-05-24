import dynamic from "next/dynamic"
import type {NextPage} from 'next'
import {useRouter} from 'next/router'
import React, {useEffect} from 'react'
import styled from 'styled-components'
import RequestDataForm from '../src/components/analyzePage/RequestWeatherForm'
import BaseLayout from '../src/components/layouts/BaseLayout'
import GlobalLoader from '../src/components/shared/Loaders/GlobalLoader'
import InterfaceLoader from '../src/components/shared/Loaders/InterfaceLoader'
import {useAppSelector} from '../src/hooks/redux'


const LeafletMap = dynamic(() => import("../src/components/analyzePage/Map"), {
  ssr: false,
})

const StyledMainContentWrapper = styled.div`
  position: relative;
  width: 100%;
`

const Analyze: NextPage = () => {
  const router = useRouter()
  const {isLoading} = useAppSelector(state => state.interfaceReducer)
  const {isAuth, isLoading: authLoading} = useAppSelector(state => state.authReducer)

  useEffect(() => {
    if (!isAuth && !authLoading) {
      router.push('/login')
    }
  }, [isAuth, router, isLoading])

  return isAuth ? (
    <BaseLayout>
      <StyledMainContentWrapper>
        {isLoading && <InterfaceLoader />}
        <RequestDataForm />
        <LeafletMap />
      </StyledMainContentWrapper>
    </BaseLayout>
  ) : <GlobalLoader />
}


export default Analyze
