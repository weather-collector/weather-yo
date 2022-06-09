import {ColumnsType, TablePaginationConfig} from 'antd/lib/table'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {Space, Table} from 'antd'
import {toast} from 'react-toastify'
import {useSWRConfig} from 'swr'
import $api from '../../../http'
import {ReportResponse} from '../../../models/response/ReportResponse'
import ConfirmationDialog from '../../shared/Modals/ConfirmationDialog'


type ReportsTableProps = {
  reports: ReportResponse[]
  pagination?: false | TablePaginationConfig | undefined
}

const ReportsTable = ({reports, pagination}: ReportsTableProps) => {
  const {mutate} = useSWRConfig()
  const [rows, setRows] = useState(reports)

  useEffect(() => {
    mutate('/reports').then(newData => setRows(newData))
  }, [])

  const deleteReportHandler = async (reportId: string) => {
    const response = await $api.delete(`/reports/${reportId}`)
    const newData = await mutate('/reports')
    setRows(newData)
    toast(response.data.message)
  }

  const columns: ColumnsType<ReportResponse> = [
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
          <ConfirmationDialog
            trigger={
              <a>Видалити</a>
            }
            onConfirmationCallback={() => deleteReportHandler(record.id)}
          />
        </Space>
      ),
    },
  ]

  return (
    <Table pagination={pagination} columns={columns} dataSource={rows} rowKey={'id'} />
  )
}

export default ReportsTable
