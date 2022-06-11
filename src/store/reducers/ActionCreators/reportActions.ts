import {AxiosError} from 'axios'
import $api from '../../../http'
import {ReportResponse} from '../../../models/response/ReportResponse'
import {AppDispatch} from '../../store'
import {interfaceLoading} from '../InterfaceSlice'
import {setReportData} from '../ReportSlice'


type generateReportProps = {
  locationName: string
  latitude: number
  longitude: number
  dateRange?: string
}

export const generateReport = ({locationName, latitude, longitude, dateRange}: generateReportProps) => async (dispatch: AppDispatch) => {
  dispatch(interfaceLoading(true))
  try {
    const response = await $api.post<{message: string, reportId: string}>(`/generate-report`, {
      latitude, longitude, dateRange, locationName,
    })
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {}
  } finally {
    dispatch(interfaceLoading(false))
  }
}

export const getSingleReport = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(interfaceLoading(true))
  try {
    const response = await $api.get<ReportResponse>(`/reports/${id}`)
    dispatch(setReportData({...response.data}))
  } catch (error) {
    if (error instanceof AxiosError) {}
  } finally {
    dispatch(interfaceLoading(false))
  }
}
