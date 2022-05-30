import type {NextPage} from 'next'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import styled from 'styled-components'
import BaseLayout from '../../src/components/layouts/BaseLayout'
import GlobalLoader from '../../src/components/shared/Loaders/GlobalLoader'
import Typography from '../../src/components/shared/Typography'
import {useAppDispatch, useAppSelector} from '../../src/hooks/redux'
import {withProtected} from '../../src/routesProtection'
import {getSingleReport} from '../../src/store/reducers/ActionCreators/reportActions'


const StyledMainContentWrapper = styled.div`

`

const ReportPage: NextPage = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    if (router.query.report) {
      dispatch(getSingleReport(router.query.report as string))
    }
  }, [router.query.report])

  return (
    <BaseLayout>
      <StyledMainContentWrapper>
        <Typography textSize={3} textColor={'#000'}>REPORT PAGE</Typography>
      </StyledMainContentWrapper>
    </BaseLayout>
  )
}


export default withProtected(ReportPage)
