import dynamic from 'next/dynamic'
import React from 'react'
import {useAppSelector} from '../../../hooks/redux'
import {useGTKData, useTempsData} from '../../../hooks/reports/chartData'
import {COLORS} from '../../../styles/theme'
import {getActiveTemp, getEffectiveTemp, getGTK} from '../../../utils/weather'
import Typography from '../../shared/Typography'
import * as Styles from './styles'


const BarChart = dynamic(() => import('../../charts/BarChart'), {ssr: false})

const Analytics = () => {
  const {weatherData} = useAppSelector(state => state.reportReducer)
  const {resultTempsData: chartTempsGreaterZero} = useTempsData(getActiveTemp, 0)
  const {resultTempsData: chartTempsGreaterTen} = useTempsData(getActiveTemp, 10)
  const {resultTempsData: chartEffectiveTemps} = useTempsData(getEffectiveTemp)
  const {resultGTKData} = useGTKData()

  console.log(chartTempsGreaterZero)

  const tempArr = weatherData.map(el => el.temp)
  const activeTempGreaterZero = getActiveTemp(tempArr, 0)
  const activeTempGreaterTen = getActiveTemp(tempArr, 10)
  const effectiveTemp = getEffectiveTemp(tempArr)

  return (
    <Styles.TempsDataWrapper>
      <Styles.InfoBlock>
        {(activeTempGreaterZero.toFixed(1) !== activeTempGreaterTen.toFixed(1)) && (
          <Styles.TempBlock>
            <Styles.TempInfo>
              <Typography textSize={2} fontWeight={600} textColor={COLORS.black}>Сума активних температур</Typography>
              <Typography textSize={3} fontWeight={700} textColor={COLORS.black}>{activeTempGreaterZero.toFixed(1)} °C</Typography>
              <Typography textSize={1} textColor={COLORS.black}>
                Сума середніх добових температур вище 0 °C
              </Typography>
            </Styles.TempInfo>
            <BarChart id={'activeTempGreaterThanZero'} data={chartTempsGreaterZero} daysAmount={10} />
          </Styles.TempBlock>
        )}

        <Styles.TempBlock>
          <Styles.TempInfo>
            <Typography textSize={3} fontWeight={700} textColor={COLORS.black}>{activeTempGreaterTen.toFixed(1)} °C</Typography>
            <Typography textSize={1} textColor={COLORS.black}>
              Сума середніх добових температур вище 10 °C
            </Typography>
          </Styles.TempInfo>
          <BarChart id={'activeTempGreaterThanTen'} data={chartTempsGreaterTen} daysAmount={10} />
        </Styles.TempBlock>
      </Styles.InfoBlock>

      <Styles.InfoBlock>
        <Styles.TempBlock>
          <Styles.TempInfo>
            <Typography textSize={2} fontWeight={600} textColor={COLORS.black}>Сума ефективних температур</Typography>
            <Typography textSize={3} fontWeight={700} textColor={COLORS.black}>{effectiveTemp.toFixed(1)} °C</Typography>
            <Typography textSize={1} textColor={COLORS.black}>
              Сума середніх добових температур повітря, зменшених на величину біологічного мінімума (5°C)
            </Typography>
          </Styles.TempInfo>
          <BarChart id={'effectiveTemp'} data={chartEffectiveTemps} daysAmount={10} />
        </Styles.TempBlock>
      </Styles.InfoBlock>

      <Styles.InfoBlock>
        <Styles.TempBlock>
          <Styles.TempInfo>
            <Typography textSize={2} fontWeight={600} textColor={COLORS.black}>Гідротермічний коефіцієнт зволоження (ГТК)</Typography>
            <Typography textSize={3} fontWeight={700} textColor={COLORS.black}>{getGTK(weatherData).toFixed(2)}</Typography>
            <Typography textSize={1} textColor={COLORS.black}>ГТК менше 0,4 – дуже сильна посуха.</Typography>
            <Typography textSize={1} textColor={COLORS.black}>ГТК від 0,4 до 0,5 – сильна посуха.</Typography>
            <Typography textSize={1} textColor={COLORS.black}>ГТК від 0,6 до 0,7 – середня посуха.</Typography>
            <Typography textSize={1} textColor={COLORS.black}>ГТК від 0,8 до 0,9 – слабка посуха.</Typography>
            <Typography textSize={1} textColor={COLORS.black}>ГТК від 1,0 до 1,5 – достатньо волого.</Typography>
            <Typography textSize={1} textColor={COLORS.black}>ГТК більше 1,5 – надмірно волого.</Typography>
          </Styles.TempInfo>
          <BarChart id={'GTK'} data={resultGTKData} daysAmount={10} />
        </Styles.TempBlock>
      </Styles.InfoBlock>
    </Styles.TempsDataWrapper>
  )
}

export default Analytics
