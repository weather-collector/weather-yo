import type {NextPage} from 'next'
import dynamic from 'next/dynamic'
import {useRouter} from 'next/router'
import React, {useEffect} from 'react'
import styled from 'styled-components'
import BaseLayout from '../../src/components/layouts/BaseLayout'
import ReportHeader from '../../src/components/reportsPage/ReportHeader'
import ReportTab from '../../src/components/reportsPage/Tab'
import Typography from '../../src/components/shared/Typography'
import {useAppDispatch, useAppSelector} from '../../src/hooks/redux'
import {withProtected} from '../../src/routesProtection'
import {getSingleReport} from '../../src/store/reducers/ActionCreators/reportActions'

const InterfaceLoader = dynamic(() => import("../../src/components/shared/Loaders/InterfaceLoader"), {
  ssr: false,
})

const StyledMainContentWrapper = styled.div`
  position: relative;
  width: 100%;
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


export default withProtected(ReportPage)
