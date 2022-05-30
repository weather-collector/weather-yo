import React from 'react'
import {Table} from 'antd'
import {ReportResponse} from '../../../models/response/ReportResponse'
import {columns} from './constants'


// @ts-ignore
const ReportsTable = ({reports}: ReportResponse[]) => {
  return (
    <Table columns={columns} dataSource={reports} />
  )
}

export default ReportsTable
