import type {NextPage} from 'next'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import BaseLayout from '../../src/components/layouts/BaseLayout'
import CustomTable from '../../src/components/reportsPage/Table'
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
  gap: 30px;

  > * {
    padding: 10px;
  }
`

const tableHeaders = [
  {
    headerName: '№',
    valueKey: '',
  },
  {
    headerName: 'Дата формування',
    valueKey: 'requestDate',
  },
  {
    headerName: 'Адреса',
    valueKey: 'address',
  },
  {
    headerName: 'Широта',
    valueKey: 'latitude',
  },
  {
    headerName: 'Довгота',
    valueKey: 'longitude',
  },
  {
    headerName: 'Проміжок часу',
    valueKey: 'dateRange',
  },
  {
    headerName: '',
    valueKey: 'id',
  },
  {
    headerName: 'Переглянути',
    valueKey: 'id',
  },
]

const Reports: NextPage = () => {
  const {reports, isLoading: isReportLoading} = useReports()

  return (
    <BaseLayout>
      <StyledMainContentWrapper>
        {isReportLoading && <InterfaceLoader />}
        <Typography textSize={3} textColor={COLORS.black} fontWeight={600}>Сформовані звіти</Typography>
        {reports && (
          <CustomTable
            headerRowNames={tableHeaders}
            dataRows={reports}
          />
        )}
      </StyledMainContentWrapper>
    </BaseLayout>
  )
}

export default withProtected(Reports)
