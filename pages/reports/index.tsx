import type {NextPage} from 'next'
import dynamic from 'next/dynamic'
import React from 'react'
import styled from 'styled-components'
import BaseLayout from '../../src/components/Layouts/BaseLayout'
import ReportsTable from '../../src/components/reportsPage/ReportsTable'
import Typography from '../../src/components/shared/Typography'
import {useReports} from '../../src/hooks/reports/useReports'
import {COLORS} from '../../src/styles/theme'


const InterfaceLoader = dynamic(() => import("../../src/components/shared/Loaders/InterfaceLoader"), {
  ssr: false,
})

const StyledMainContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  > * {
    padding: 10px;
  }
`


const Reports: NextPage = () => {
  const {reports, isLoading} = useReports()

  return (
    <BaseLayout>
      <StyledMainContentWrapper>
        {isLoading && <InterfaceLoader />}
        <Typography textSize={3} textColor={COLORS.black} fontWeight={600}>Ваші звіти</Typography>
        {reports && (
          <ReportsTable reports={reports} />
        )}
      </StyledMainContentWrapper>
    </BaseLayout>
  )
}

export default Reports
