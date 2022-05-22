import dynamic from "next/dynamic"
import type {NextPage} from 'next'
import styled from 'styled-components'
import RequestDataForm from '../src/components/analyzePage/RequestWeatherForm'
import BaseLayout from '../src/components/layouts/BaseLayout'
import {useAppSelector} from '../src/hooks/redux'


const LeafletMap = dynamic(() => import("../src/components/analyzePage/Map"), {
  ssr: false,
})

const StyledMainContentWrapper = styled.div`
  width: 100%;
  //padding: 15px;
`

const Analyze: NextPage = () => {
  const {isAuth} = useAppSelector(state => state.authReducer)

  return isAuth ? (
    <BaseLayout>
      <StyledMainContentWrapper>
        <RequestDataForm />
        <LeafletMap />
      </StyledMainContentWrapper>
    </BaseLayout>
  ) : null
}


export default Analyze
