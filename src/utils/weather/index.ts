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
  let precip = 0

  weatherData.forEach(el => {
    if (el.temp >= baseTemp) {
      precip += el.precip
    }
  })

  if (activeTemps === 0) {
    return 0
  }

  return precip / (0.1 * activeTemps)
}

export const getWindDirection = (windDirInDegrees: number): string => {
  if (windDirInDegrees >= 23 && windDirInDegrees <= 68) {
    return "Пн-Сх"
  }
  if (windDirInDegrees >= 69 && windDirInDegrees <= 112) {
    return "Сх"
  }
  if (windDirInDegrees >= 113 && windDirInDegrees <= 158) {
    return "Пд-Сх"
  }
  if (windDirInDegrees >= 159 && windDirInDegrees <= 202) {
    return "Пд"
  }
  if (windDirInDegrees >= 203 && windDirInDegrees <= 247) {
    return "Пд-Зах"
  }
  if (windDirInDegrees >= 248 && windDirInDegrees <= 292) {
    return "Зах"
  }
  if (windDirInDegrees >= 293 && windDirInDegrees <= 338) {
    return "Пн-Зах"
  } else {
    return "Пн"
  }
}


const emptyTempData = {
  tempmax: 0,
  tempmin: 0,
  temp: 0,
  dew: 0,
  humidity: 0,
  precip: 0,
  precipcover: 0,
  windspeed: 0,
  winddir: 0,
  pressure: 0,
  cloudcover: 0,
}

export const getAveragedData = (weatherData: IWeatherData[], averagingValue: number) => {
  let averagedData: IWeatherData[] = []
  let tempData = {...emptyTempData} as Omit<IWeatherData, 'datetime'>
  let counter = 0

  weatherData.forEach((day, index) => {
    counter++
    tempData = {
      tempmax: tempData.tempmax + day.tempmax,
      tempmin: tempData.tempmin + day.tempmin,
      temp: tempData.temp + day.temp,
      dew: tempData.dew + day.dew,
      humidity: tempData.humidity + day.humidity,
      precip: tempData.precip + day.precip,
      precipcover: tempData.precipcover + day.precipcover,
      windspeed: tempData.windspeed + day.windspeed,
      winddir: tempData.winddir + day.winddir,
      pressure: tempData.pressure + day.pressure,
      cloudcover: tempData.cloudcover + day.cloudcover,
    }

    if (counter / averagingValue === 1) {//|| weatherData.length === index + 1
      Object.entries(tempData).forEach(el => {
        if (el[0] === 'precip') {
          tempData = {...tempData, [el[0]]: round(el[1])}
          return
        }
        if (weatherData.length < averagingValue) {
          tempData = {...tempData, [el[0]]: round(el[1] / weatherData.length)}
          return
        }
        tempData = {...tempData, [el[0]]: round(el[1] / averagingValue)}
      })
      averagedData = [...averagedData, {...tempData, datetime: day.datetime}]

      tempData = {...emptyTempData} as Omit<IWeatherData, 'datetime'>
      counter = 0
    }
  })
  return averagedData
}


export const round = (value: number) => {
  return Math.round((value + Number.EPSILON) * 100) / 100
}
