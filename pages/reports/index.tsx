import type {NextPage} from 'next'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import styled from 'styled-components'
import BaseLayout from '../../src/components/layouts/BaseLayout'
import CustomTable from '../../src/components/reportsPage/Table'
import GlobalLoader from '../../src/components/shared/Loaders/GlobalLoader'
import Typography from '../../src/components/shared/Typography'
import {useAppDispatch, useAppSelector} from '../../src/hooks/redux'
import $api from '../../src/http'
import {ReportResponse} from '../../src/models/response/ReportResponse'
import {interfaceSlice} from '../../src/store/reducers/InterfaceSlice'
import {COLORS} from '../../src/styles/theme'


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
    valueKey: ''
  },
  {
    headerName: 'Дата формування',
    valueKey: 'requestDate'
  },
  {
    headerName: 'Адреса',
    valueKey: 'address'
  },
  {
    headerName: 'Широта',
    valueKey: 'latitude'
  },
  {
    headerName: 'Довгота',
    valueKey: 'longitude'
  },
  {
    headerName: 'Проміжок часу',
    valueKey: 'dateRange'
  },
  {
    headerName: '',
    valueKey: 'id'
  },
  {
    headerName: 'Переглянути',
    valueKey: 'id'
  }
]

const Reports: NextPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const {isAuth, isLoading} = useAppSelector(state => state.authReducer)
  const [reports, setReports] = useState<ReportResponse[]>([])

  useEffect(() => {
    if (!isAuth && !isLoading) {
      router.push('/login')
    }
  }, [isAuth, router, isLoading])

  // USE SWR
  useEffect(() => {
    dispatch(interfaceSlice.actions.loading(true))
    $api.get<ReportResponse[]>(`/reports`)
      .then(response => setReports(response.data))
      .catch(error => console.log(error))
      .finally(() => dispatch(interfaceSlice.actions.loading(false)))
  }, [])


  return isAuth ? (
    <BaseLayout>
      <StyledMainContentWrapper>
        <Typography textSize={3} textColor={COLORS.black} fontWeight={600}>Сформовані звіти</Typography>
        <CustomTable
          headerRowNames={tableHeaders}
          dataRows={reports}
        />
      </StyledMainContentWrapper>
    </BaseLayout>
  ) : <GlobalLoader />
}

export default Reports
