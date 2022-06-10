import {getWindDirection} from '../../utils/weather'


const categories = ['Пн', 'Пн-Сх', 'Сх', 'Пд-Сх', 'Пд', 'Пд-Зах', 'Зах', 'Пн-Зах']

type windRoseDataTypes = {
  data: (string | number)[][],
  type: 'column',
  name: string,
}

const windRoseData: windRoseDataTypes[] = [
  {
    data: [],
    type: 'column',
    name: '< 0.5 м/с',
  },
  {
    data: [],
    type: 'column',
    name: '0.5-2 м/с',
  },
  {
    data: [],
    type: 'column',
    name: '2-4 м/с',
  },
  {
    data: [],
    type: 'column',
    name: '4-6 м/с',
  },
  {
    data: [],
    type: 'column',
    name: '6-8 м/с',
  },
  {
    data: [],
    type: 'column',
    name: '8-10 м/с',
  },
  {
    data: [],
    type: 'column',
    name: '> 10 м/с',
  },
]

export function calculateWindRoseData(windSpeed: number[], windDirection: number[], windSpeedSum: number) {
  windSpeed.forEach((el, index) => {
    if (el < 0.5) {
      windRoseData[0].data.push([getWindDirection(windDirection[index]), windSpeed[index]])
    }
    if (el >= 0.5 && el < 2) {
      windRoseData[1].data.push([getWindDirection(windDirection[index]), windSpeed[index]])
    }
    if (el >= 2 && el < 4) {
      windRoseData[2].data.push([getWindDirection(windDirection[index]), windSpeed[index]])
    }
    if (el >= 4 && el < 6) {
      windRoseData[3].data.push([getWindDirection(windDirection[index]), windSpeed[index]])
    }
    if (el >= 6 && el < 8) {
      windRoseData[4].data.push([getWindDirection(windDirection[index]), windSpeed[index]])
    }
    if (el >= 8 && el < 10) {
      windRoseData[5].data.push([getWindDirection(windDirection[index]), windSpeed[index]])
    }
    if (el >= 10) {
      windRoseData[6].data.push([getWindDirection(windDirection[index]), windSpeed[index]])
    }
  })

  windRoseData.forEach(dataObj => {
    let flattenedData: (string | number)[][] = []
    categories.forEach((el) => {
      let flattenedValue = dataObj.data.filter(arr => arr[0] === el).reduce((previousValue, currentValue) => {
        return previousValue + parseInt(currentValue[1] as string)
      }, 0)

      flattenedData.push([el, Math.round((flattenedValue * 100 / windSpeedSum + Number.EPSILON))])
    })
    dataObj.data = flattenedData
    flattenedData = []
  })

  return windRoseData
}
