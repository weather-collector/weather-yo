import {IWeatherData} from './IWeatherData'


export interface IWeatherIndicator {
  label: string,
  name: keyof Omit<IWeatherData, "datetime">,
  iconSrc?: string
}
