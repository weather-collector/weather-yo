import type {NextPage} from 'next'
import dynamic from 'next/dynamic'
import {useRouter} from 'next/router'
import React, {useEffect} from 'react'
import styled from 'styled-components'
import BaseLayout from '../../src/components/Layouts/BaseLayout'
import ReportHeader from '../../src/components/reportsPage/ReportHeader'
import ReportTab from '../../src/components/reportsPage/ReportTab'
import {useAppDispatch, useAppSelector} from '../../src/hooks/redux'
import {getSingleReport} from '../../src/store/reducers/ActionCreators/reportActions'
import {MEDIA_QUERIES} from '../../src/utils/mediaQueries'


const InterfaceLoader = dynamic(() => import("../../src/components/shared/Loaders/InterfaceLoader"), {
  ssr: false,
})

const StyledMainContentWrapper = styled.div`
  position: relative;
  width: 100%;

  ${MEDIA_QUERIES.lg} {
    margin-bottom: 30px;
  }
`

const ReportPage: NextPage = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const {isLoading} = useAppSelector(state => state.interfaceReducer)

  useEffect(() => {
    if (router.query.report) {
      dispatch(getSingleReport(router.query.report as string))
    }
  }, [router.query.report])

  return (
    <BaseLayout>
      <StyledMainContentWrapper>
        {isLoading && <InterfaceLoader />}
        <ReportHeader />
        <ReportTab />
      </StyledMainContentWrapper>
    </BaseLayout>
  )
}


export default ReportPage
