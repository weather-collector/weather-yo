import React from 'react'
import {COLORS} from '../../../styles/theme'
import Typography from '../../shared/Typography'
import * as Styles from './styles'

import DownloadIcon from '../../../assets/images/download.svg'


const ReportHeader = () => {
  return (
    <Styles.HeaderWrapper>
      <Styles.ReportInfo>
        <Styles.Location>
          <Typography textSize={2} textColor={COLORS.black} fontWeight={700}>Полтава</Typography>
          <Styles.Coordinates>
            <Typography textSize={'14px'} textColor={COLORS.overlay}>довгота: <span>34.569</span></Typography>
            <Typography textSize={'14px'} textColor={COLORS.overlay}>широта: <span>34.569</span></Typography>
          </Styles.Coordinates>
        </Styles.Location>

        <Styles.DateRange>
          <Typography textSize={2} textColor={COLORS.black} fontWeight={700}>2020-07-01 - 2020-07-31</Typography>
          <Typography textSize={'14px'} textColor={COLORS.overlay}>період аналізу даних</Typography>
        </Styles.DateRange>
      </Styles.ReportInfo>

      <Styles.DownloadButton>
        <DownloadIcon />
      </Styles.DownloadButton>
    </Styles.HeaderWrapper>
  )
}

export default ReportHeader
