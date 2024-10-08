import { api } from "@/lib/axios"

interface RegisterStudentRequest {
  teamId: string
  name: string
  rm: number
}

export async function registerStudent({
  name,
  teamId,
  rm,
}: RegisterStudentRequest) {
  const response = await api.post<{ token: string }>(
    `/teams/${teamId}/students`,
    {
      name,
      rm,
    },
  )

  return response.data
}
