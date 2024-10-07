import { api } from "@/lib/axios"

interface CreateCardRequest {
  description: string
  sessionId: string
}

export async function createCard({
  description,
  sessionId,
}: CreateCardRequest) {
  const response = await api.post<{ cardId: string }>(
    `/sessions/${sessionId}/cards`,
    {
      description,
    },
  )

  return response.data
}
