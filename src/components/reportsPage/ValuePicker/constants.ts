import {IWeatherIndicator} from '../../../models/IWeatherIndicator'


export const weatherIndicators: IWeatherIndicator[] = [
  {
    label: 't° повітря',
    name: 'temp',
    iconSrc: '/weatherIcons/temp.svg'
  },
  {
    label: 't° точки роси',
    name: 'dew',
    iconSrc: '/weatherIcons/dew.svg'
  },
  {
    label: 'Кількість опадів (мм)',
    name: 'precip',
    iconSrc: '/weatherIcons/precip.svg'
  },
  {
    label: 'Покриття опадами (%)',
    name: 'precipcover',
    iconSrc: '/weatherIcons/precip-cover.svg'
  },
  {
    label: 'Швидкість вітру (м/с)',
    name: 'windspeed',
    iconSrc: '/weatherIcons/wind-speed.svg'
  },
  {
    label: 'Напрям вітру',
    name: 'winddir',
    iconSrc: '/weatherIcons/wind-dir.svg'
  },
  {
    label: 'Атмосферний тиск',
    name: 'pressure',
    iconSrc: '/weatherIcons/pressure.svg'
  },
  {
    label: 'Хмарність (%)',
    name: 'cloudcover',
    iconSrc: '/weatherIcons/cloud-cover.svg'
  },
  {
    label: 'Відносна вологість (%)',
    name: 'humidity',
    iconSrc: '/weatherIcons/humidity.svg'
  },
]
