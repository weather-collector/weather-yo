import {IWeatherData} from '../IWeatherData'


export interface ReportResponse {
  id: string
  requestDate: string
  requestRange: string
  latitude: number
  longitude: number
  address: string
  weatherData: IWeatherData[]
}

