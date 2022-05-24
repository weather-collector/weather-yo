import {AxiosError} from 'axios'
import $api from '../../../http'
import {ReportResponse} from '../../../models/response/ReportResponse'
import {AppDispatch} from '../../store'
import {interfaceSlice} from '../InterfaceSlice'
import {reportSlice} from '../ReportSlice'


type generateReportProps = {
  locationName: string
  latitude: number
  longitude: number
  dateRange?: string
}

export const generateReport = ({locationName, latitude, longitude, dateRange}: generateReportProps) => async (dispatch: AppDispatch) => {
  dispatch(interfaceSlice.actions.loading(true))
  try {
    const response = await $api.post<{message: string, reportId: string}>(`/generate-report`, {
      latitude, longitude, dateRange, locationName,
    })
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data?.message)
      return false
    }
  } finally {
    dispatch(interfaceSlice.actions.loading(false))
  }
}

export const getSingleReport = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(interfaceSlice.actions.loading(true))
  try {
    const response = await $api.get<ReportResponse>(`/reports/${id}`)
    dispatch(reportSlice.actions.setReportData({...response.data}))
    return true
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data?.message)
      return false
    }
  } finally {
    dispatch(interfaceSlice.actions.loading(false))
  }
}
