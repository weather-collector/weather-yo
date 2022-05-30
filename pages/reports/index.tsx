import type {NextPage} from 'next'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import BaseLayout from '../../src/components/layouts/BaseLayout'
import AntdTable from '../../src/components/reportsPage/ReportsTable'
import Typography from '../../src/components/shared/Typography'
import {useReports} from '../../src/hooks/reports/useReports'
import {withProtected} from '../../src/routesProtection'
import {COLORS} from '../../src/styles/theme'


const InterfaceLoader = dynamic(() => import("../../src/components/shared/Loaders/InterfaceLoader"), {
  ssr: false,
})

const StyledMainContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > * {
    padding: 10px;
  }
`


const Reports: NextPage = () => {
  const {reports, isLoading: isReportLoading} = useReports()

  return (
    <BaseLayout>
      <StyledMainContentWrapper>
        {isReportLoading && <InterfaceLoader />}
        <Typography textSize={3} textColor={COLORS.black} fontWeight={600}>Ваші звіти</Typography>
        {reports && (
          //@ts-ignore
          <AntdTable reports={reports} />
        )}
      </StyledMainContentWrapper>
    </BaseLayout>
  )
}

export default withProtected(Reports)
