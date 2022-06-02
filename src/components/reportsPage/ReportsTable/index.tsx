import React from 'react'
import {Table} from 'antd'
import {ReportResponse} from '../../../models/response/ReportResponse'
import {columns} from './constants'

type ReportsTableProps = {
  reports: ReportResponse[]
}

const ReportsTable = ({reports}: ReportsTableProps) => {
  return (
    <Table columns={columns} dataSource={reports} rowKey={'id'} />
  )
}

export default ReportsTable
