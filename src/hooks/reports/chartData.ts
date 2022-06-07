import {IChartData, IChartObject} from '../../models/IChartObject'
import {IWeatherData} from '../../models/IWeatherData'
import {getActiveTemp, getEffectiveTemp, getGTK} from '../../utils/weather'
import {useAppSelector} from '../redux'


export const useChartData = (averagingValue = 1) => {
  const {weatherData, selectedIndicators} = useAppSelector(state => state.reportReducer)
  let resultChartData: IChartObject[] = []

  selectedIndicators.forEach((indicator) => {

    let chartData: IChartData[] = []
    let resultValue = 0
    let counter = 0

    weatherData.forEach((day, index) => {
        resultValue += day[indicator.name as keyof Omit<IWeatherData, "datetime">]
        counter++

        if (counter % averagingValue === 0) {
          chartData = [...chartData, {
            dateOfTime: day.datetime,
            value: indicator.name === 'precip' ? Math.round((resultValue + Number.EPSILON) * 100) / 100 : Math.round((resultValue / counter + Number.EPSILON) * 100) / 100,
          }]
          counter = 0
          resultValue = 0
        }
    })

    let chartObject = {
      ...indicator,
      chartData: chartData,
    }
    resultChartData.push(chartObject)
  })

  return {resultChartData}
}

//accumulation
export const useTempsData = (callback: typeof getEffectiveTemp | typeof getActiveTemp, aboveValue = 5) => {
  const {weatherData} = useAppSelector(state => state.reportReducer)
  let resultTempsData: IChartObject[] = []

  const averagingValue = 10
  let chartData: IChartData[] = []
  let counter = 0
  let prevIndex = 0
  let tempValue = 0

  weatherData.forEach((day, index) => {
      counter++

      if (counter % averagingValue === 0) {
        tempValue += callback(weatherData.slice(prevIndex, index + 1).map(el => el.temp), aboveValue)
        chartData = [...chartData, {
          dateOfTime: day.datetime,
          value: Math.round((tempValue + Number.EPSILON) * 100) / 100,
        }]
        prevIndex = index + 1
      }
  })

  let chartObject = {
    name: 'tempSum',
    label: 'Сума температур',
    chartData: chartData,
  }
  //@ts-ignore
  resultTempsData.push(chartObject)

  return {resultTempsData}
}


export const useGTKData = () => {
  const {weatherData} = useAppSelector(state => state.reportReducer)
  let resultGTKData: IChartObject[] = []

  const averagingValue = 10
  let chartData: IChartData[] = []
  let counter = 0
  let prevIndex = 0

  weatherData.forEach((day, index) => {
      counter++

      if (counter % averagingValue === 0) {
        chartData = [...chartData, {
          dateOfTime: day.datetime,
          value: Math.round((getGTK(weatherData.slice(prevIndex, index + 1)) + Number.EPSILON) * 100) / 100,
        }]
        prevIndex = index + 1
      }
  })

  let chartObject = {
    name: 'gtk',
    label: 'ГТК',
    chartData: chartData,
  }

  resultGTKData.push(<IChartObject>chartObject)

  return {resultGTKData}
}
