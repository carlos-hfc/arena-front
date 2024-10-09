import { api } from "@/lib/axios"
import { getToken } from "@/lib/cookies"

export interface Profile {
  student: {
    id: string
    name: string
    rm: string
  }
}

export async function getProfile() {
  const token = getToken()

  const response = await api.get<Profile>(`/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}
