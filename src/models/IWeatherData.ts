export interface IWeatherData {
  datetime: string,
  tempmax: number,
  tempmin: number,
  temp: number,
  dew: number,
  humidity: number,
  precip: number,
  precipcover: number,
  windspeed: number,
  winddir: number,
  pressure: number,
  cloudcover: number,
  solarradiation: number | null,
  solarenergy: number | null,
  uvindex: number | null
}
