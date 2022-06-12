import {IWeatherIndicator} from './IWeatherIndicator'


export interface IChartData {
  dateOfTime: string,
  value: number
}

export interface IChartObject extends IWeatherIndicator {
  chartData: IChartData[]
}
