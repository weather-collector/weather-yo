import React from 'react'
import {useAppDispatch, useAppSelector} from '../../../hooks/redux'
import {setAveragingAmount} from '../../../store/reducers/ReportSlice'
import {COLORS} from '../../../styles/theme'
import {exportToExcel} from '../../../utils/exportToExcel'
import Typography from '../../shared/Typography'
import * as Styles from './styles'

import DownloadIcon from '../../../assets/images/download.svg'


const ReportHeader = () => {
  const dispatch = useAppDispatch()
  const {address, longitude, latitude, dateRange, weatherData} = useAppSelector(state => state.reportReducer)

  const averagingHandler = (amount: number) => {
    dispatch(setAveragingAmount(amount))
  }

  return (
    <Styles.HeaderWrapper>
      <Styles.ReportInfo>
        <Styles.Location>
          <Typography textSize={2} textColor={COLORS.black} fontWeight={700}>{address}</Typography>
          <Styles.Coordinates>
            <Typography textSize={'14px'} textColor={COLORS.overlay}>довгота: <span>{longitude}</span></Typography>
            <Typography textSize={'14px'} textColor={COLORS.overlay}>широта: <span>{latitude}</span></Typography>
          </Styles.Coordinates>
        </Styles.Location>

        <Styles.DateRange>
          <Typography textSize={2} textColor={COLORS.black} fontWeight={700}>{dateRange}</Typography>
          <Typography textSize={'14px'} textColor={COLORS.overlay}>період аналізу даних</Typography>
        </Styles.DateRange>
      </Styles.ReportInfo>

      <Styles.AveragingButtonsWrapper>
        <Styles.AveragingButton onClick={() => averagingHandler(1)}>
          День
        </Styles.AveragingButton>
        <Styles.Divider />
        <Styles.AveragingButton onClick={() => averagingHandler(10)}>
          Декада
        </Styles.AveragingButton>
        <Styles.Divider />
        <Styles.AveragingButton onClick={() => averagingHandler(30)}>
          Місяць
        </Styles.AveragingButton>
      </Styles.AveragingButtonsWrapper>

      <Styles.DownloadButton onClick={() => exportToExcel(weatherData, `${address}-показники`)}>
        <DownloadIcon />
      </Styles.DownloadButton>
    </Styles.HeaderWrapper>
  )
}

export default ReportHeader
