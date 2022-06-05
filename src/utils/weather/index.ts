import {IWeatherData} from '../../models/IWeatherData'


export const getActiveTemp = (temps: number[], aboveTemp: number): number => {
  let result = 0
  temps.forEach(t => {
    if (t >= aboveTemp) {
      result += t
    }
  })

  return result
}

export const getEffectiveTemp = (temps: number[], aboveTemp = 5): number => {
  let result = 0

  temps.forEach(t => {
    if (t >= aboveTemp) {
      result += t - aboveTemp
    }
  })

  return result
}

export const getGTK = (weatherData: IWeatherData[]): number => {
  const baseTemp = 10
  let activeTemps = getActiveTemp(weatherData.map(el => el.temp), 10)
  let percip = 0

  weatherData.forEach(el => {
    if (el.temp >= baseTemp) {
      percip += el.precip
    }
  })

  return percip / (0.1 * activeTemps)
}
