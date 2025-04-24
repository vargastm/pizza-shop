import { api } from '@/lib/axios'

export interface GetMonthrevenueResponse {
  receipt: number
  diffFromLastMonth: number
}

export async function getMonthRevenue() {
  const response = await api.get<GetMonthrevenueResponse>(
    '/metrics/month-receipt',
  )
  return response.data
}
