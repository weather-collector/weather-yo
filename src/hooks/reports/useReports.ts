import useSWR from "swr"
import $api from '../../http'
import {ReportResponse} from '../../models/response/ReportResponse'


const $reportsFetcher = async (url: string) => {
  const response = await $api.get<ReportResponse[]>(url)

  return response.data
}

export function useReports() {
  const {data, error} = useSWR('/reports', $reportsFetcher, {revalidateOnMount: true})

  return {
    reports: data,
    isLoading: !error && !data,
    isError: error,
  }
}
