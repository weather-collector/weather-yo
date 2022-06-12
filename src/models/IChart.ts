import {IChartObject} from './IChartObject'


export interface IChart {
  id: string
  data: IChartObject[]
  daysAmount: number
}
