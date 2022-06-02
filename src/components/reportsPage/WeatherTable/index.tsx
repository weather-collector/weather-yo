import {Table} from 'antd'
import Image from 'next/image'
import React from 'react'
import {useAppSelector} from '../../../hooks/redux'


const WeatherTable = () => {
  const {weatherData, selectedIndicators} = useAppSelector(state => state.reportReducer)

  const dateColumn = {
    title: 'Дата спостережень',
    dataIndex: 'datetime',
    key: 'datetime',
    width: 200
  }

  const columns = selectedIndicators!.map((el) => ({
    title: el.iconSrc ? <Image src={el.iconSrc} alt={el.label} width={42} height={42} /> : el.label,
    dataIndex: el.name,
    key: el.name,
    width: 100,
    align: 'center'
  }))

  return (
    <Table
      // @ts-ignore
      columns={[dateColumn, ...columns]}
      dataSource={weatherData}
      rowKey={'datetime'}
    />
  )
}

export default WeatherTable
