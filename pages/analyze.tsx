import dynamic from "next/dynamic"
import type {NextPage} from 'next'
import React from 'react'
import styled from 'styled-components'
import RequestWeatherForm from '../src/components/analyzePage/RequestWeatherForm'
import BaseLayout from '../src/components/layouts/BaseLayout'
import {useAppSelector} from '../src/hooks/redux'
import {withProtected} from '../src/routesProtection'


const LeafletMap = dynamic(() => import("../src/components/analyzePage/Map"), {
  ssr: false,
})
const InterfaceLoader = dynamic(() => import("../src/components/shared/Loaders/InterfaceLoader"), {
  ssr: false,
})

const StyledMainContentWrapper = styled.div`
  position: relative;
  width: 100%;
`

const Analyze: NextPage = () => {
  const {isLoading} = useAppSelector(state => state.interfaceReducer)

  return (
    <BaseLayout>
      <StyledMainContentWrapper>
        {isLoading && <InterfaceLoader />}
        <RequestWeatherForm />
        <LeafletMap />
      </StyledMainContentWrapper>
    </BaseLayout>
  )
}


export default withProtected(Analyze)