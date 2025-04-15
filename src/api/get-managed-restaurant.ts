import { api } from '@/lib/axios'

interface GetManagedRestaurantResposnse {
  name: string
  id: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResposnse>(
    '/managed-restaurant',
  )

  return response.data
}
