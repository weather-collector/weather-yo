import dynamic from "next/dynamic"
import type {NextPage} from 'next'
import React from 'react'
import styled from 'styled-components'
import RequestWeatherForm from '../src/components/analyzePage/RequestWeatherForm'
import BaseLayout from '../src/components/Layouts/BaseLayout'
import MetaHead from '../src/components/shared/MetaHead'
import {useAppSelector} from '../src/hooks/redux'


const LeafletMap = dynamic(() => import("../src/components/analyzePage/Map"), {
  ssr: false,
})
const InterfaceLoader = dynamic(() => import("../src/components/shared/Loaders/InterfaceLoader"), {
  ssr: false,
})

const StyledMainContentWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 60px);
`

const Analyze: NextPage = () => {
  const {isLoading} = useAppSelector(state => state.interfaceReducer)

  return (
    <>
      <MetaHead />
      <BaseLayout>
        <StyledMainContentWrapper>
          {isLoading && <InterfaceLoader />}
          <RequestWeatherForm />
          <LeafletMap />
        </StyledMainContentWrapper>
      </BaseLayout>
    </>
  )
}


export default Analyze
