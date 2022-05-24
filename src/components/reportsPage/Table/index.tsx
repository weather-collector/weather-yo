import Link from 'next/link'
import React from 'react'
import {ReportResponse} from '../../../models/response/ReportResponse'
import * as Styles from './styles'

type headerRowNamesObjectType = {
  headerName: string
  valueKey: string
}

type CustomTableProps = {
  headerRowNames: Array<headerRowNamesObjectType>
  dataRows: Array<ReportResponse>
}

const CustomTable = ({headerRowNames, dataRows}: CustomTableProps) => {
  return (
    <Styles.Table>
        <Styles.TableHeaderRow>
          {headerRowNames.map((headerRow, index) => (
            <Styles.TableCell key={index}>{headerRow.headerName}</Styles.TableCell>
          ))}
        </Styles.TableHeaderRow>

      <Styles.TableBody>
        {dataRows.map((row: ReportResponse, index) => (
          <Styles.TableRow key={`${index}-${row.id}`}>
              <Styles.TableCell>
                {index+1}
              </Styles.TableCell>
            {headerRowNames.map((headerRow, index) => (
              <Styles.TableCell key={index}>
                {/*// @ts-ignore*/}
                {row[`${headerRow.valueKey}`]}
              </Styles.TableCell>
            ))}
            <Styles.TableCell key={index}>
              <Link href={`/reports/${row.id}`}>
                <a>go to report</a>
              </Link>
            </Styles.TableCell>
          </Styles.TableRow>
        ))}
      </Styles.TableBody>
    </Styles.Table>
  )
}

export default CustomTable
