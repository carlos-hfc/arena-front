import { api } from "@/lib/axios"

interface CreateBoostRequest {
  description: string
  sessionId: string
}

export async function createBoost({
  description,
  sessionId,
}: CreateBoostRequest) {
  const response = await api.post<{ boostId: string }>(
    `/sessions/${sessionId}/boosts`,
    {
      description,
    },
  )

  return response.data
}
