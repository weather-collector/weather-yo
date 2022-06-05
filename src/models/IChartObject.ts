import {IWeatherIndicator} from './IWeatherIndicator'


export interface IChartData {
  dateTime: string,
  value: number
}

export interface IChartObject extends IWeatherIndicator {
  chartData: IChartData[]
}
