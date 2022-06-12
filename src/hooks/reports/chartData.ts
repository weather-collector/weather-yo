import {IChartData, IChartObject} from '../../models/IChartObject'
import {getActiveTemp, getAveragedData, getEffectiveTemp, getGTK, round} from '../../utils/weather'
import {useAppSelector} from '../redux'


export const useChartData = (averagingValue = 1) => {
  const {weatherData, selectedIndicators} = useAppSelector(state => state.reportReducer)
  const flattenedWeatherData = getAveragedData(weatherData, averagingValue)

  let resultChartData: IChartObject[] = []

  selectedIndicators.forEach((indicator) => {
    let chartData: IChartData[] = []

    flattenedWeatherData.forEach(el => {
      chartData = [
        ...chartData,
        {
          dateOfTime: el.datetime,
          value: el[indicator.name],
        },
      ]
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

    let condition = (weatherData.length === index + 1) && (counter > (2/3) * averagingValue)
    //last portion of data bigger than 2/3 of averagingValue
    if (counter % averagingValue === 0 || condition) {
      tempValue += callback(weatherData.slice(prevIndex, index + 1).map(el => el.temp), aboveValue)
      chartData = [...chartData, {
        dateOfTime: day.datetime,
        value: round(tempValue),
      }]
      prevIndex = index + 1
    }
  })

  let chartObject = {
    name: 'tempSum',
    label: 'Сума температур',
    chartData: chartData,
  }
  resultTempsData.push(<IChartObject>chartObject)

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

    let condition = (weatherData.length === index + 1) && (counter > (2/3) * averagingValue)
    //last portion of data bigger than 2/3 of averagingValue
    if (counter % averagingValue === 0 || condition) {
      chartData = [...chartData, {
        dateOfTime: day.datetime,
        value: round(getGTK(weatherData.slice(prevIndex, index + 1))),
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
