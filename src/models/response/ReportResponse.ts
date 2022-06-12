import {IWeatherData} from '../IWeatherData'


export interface ReportResponse {
  id: string
  requestDate: string
  dateRange: string
  latitude: number
  longitude: number
  address: string
  weatherData: IWeatherData[]
}

