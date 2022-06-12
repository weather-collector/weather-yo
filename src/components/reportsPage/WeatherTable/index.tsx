import {Table} from 'antd'
import Image from 'next/image'
import React from 'react'
import {useAppSelector} from '../../../hooks/redux'
import {getAveragedData, getWindDirection} from '../../../utils/weather'


const WeatherTable = () => {
  const {weatherData, selectedIndicators, averagingAmount} = useAppSelector(state => state.reportReducer)
  let averagedWeatherData = getAveragedData(weatherData, averagingAmount)

  const dateColumn = {
    title: 'Дата спостережень',
    dataIndex: 'datetime',
    key: 'datetime',
    width: 200,
  }
  const columns = selectedIndicators!.map((el) => ({
    title: el.iconSrc ? <Image src={el.iconSrc} alt={el.label} width={42} height={42} /> : el.label,
    dataIndex: el.name,
    key: el.name,
    width: 100,
    align: 'center',
  }))

  return (
    <Table
      // @ts-ignore
      columns={[dateColumn, ...columns]}
      dataSource={averagedWeatherData.map((day) => ({...day, winddir: getWindDirection(day.winddir)}))}
      rowKey={'datetime'}
      style={{overflowX: 'auto', minWidth: '970px'}}
    />
  )
}

export default WeatherTable
