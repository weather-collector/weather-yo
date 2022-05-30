import {Space} from 'antd'
import {ColumnsType} from 'antd/lib/table'
import Link from 'next/link'
import React from 'react'


export interface DataType {
  key: string
  requestDate: string
  address: string
  latitude: number
  longitude: number
  dateRange: string
  id: string
}

export const columns: ColumnsType<DataType> = [
  {
    title: 'Дата формування',
    dataIndex: 'requestDate',
    key: 'requestDate',
  },
  {
    title: 'Назва локації',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Широта',
    dataIndex: 'latitude',
    key: 'latitude',
  },
  {
    title: 'Довгота',
    dataIndex: 'longitude',
    key: 'longitude',
  },
  {
    title: 'Проміжок часу',
    dataIndex: 'dateRange',
    key: 'dateRange',
  },
  {
    title: 'Детальніше',
    dataIndex: 'id',
    key: 'id',
    render: text => <Link href={`/reports/${text}`}><a>Переглянути</a></Link>,
  },
  {
    title: '',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
]