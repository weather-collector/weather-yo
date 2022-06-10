import dynamic from 'next/dynamic'
import {useRouter} from 'next/router'
import React, {useEffect} from 'react'
import {useReports} from '../../../hooks/reports/useReports'
import ReportsTable from '../../reportsPage/ReportsTable'
import * as Styles from './styles'
import {COLORS} from '../../../styles/theme'
import Button from '../../shared/Button'
import Typography from '../../shared/Typography'

import FileIcon from '../../../assets/images/File.svg'
import AnalyticsImage from '../../../assets/images/Analytics.svg'


const InterfaceLoader = dynamic(() => import("../../shared/Loaders/InterfaceLoader"), {
  ssr: false,
})


const ContentContainer = () => {
  const {reports, isLoading} = useReports()

  const router = useRouter()
  return (
    <Styles.EmptyContentWrapper>
      <Styles.CollectDataWrapper>
        <Button
          bgColor={COLORS.successBg}
          hoveredBgColor={COLORS.hoveredSuccessBg}
          activeBgColor={COLORS.activeSuccessBg}
          width={'280px'}
          onClick={() => router.push('/analyze')}
        >
          <FileIcon />
          <Typography textSize={2} textColor={COLORS.successText} fontWeight={400}>Зібрати дані</Typography>
        </Button>
        <AnalyticsImage />
      </Styles.CollectDataWrapper>

      <Styles.LatestReports>
        {isLoading && <InterfaceLoader />}
        {reports && (
          <>
            <Typography textSize={2} textColor={COLORS.black} fontWeight={500}>Ваші останні звіти</Typography>
            <ReportsTable pagination={false} reports={reports.slice(0, 3)} />
          </>
        )}
      </Styles.LatestReports>
    </Styles.EmptyContentWrapper>
  )
}

export default ContentContainer
