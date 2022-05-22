export interface IWeatherData {
  datetime: string,
  tempMax: number,
  tempMin: number,
  temp: number,
  dew: number,
  humidity: number,
  precipitation: number,
  precipitationCover: number,
  windSpeed: number,
  windDir: number,
  pressure: number,
  cloudCover: number,
  solarRadiation: number | null,
  solarEnergy: number | null,
  uvIndex: number | null
}
