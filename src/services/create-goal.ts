import { api } from "@/lib/axios"

interface CreateGoalRequest {
  sessionId: string
  description: string
  time: number
  order: number
}

export async function createGoal({
  description,
  sessionId,
  time,
  order,
}: CreateGoalRequest) {
  const response = await api.post<{ goalId: string }>(
    `/sessions/${sessionId}/goals`,
    {
      description,
      time,
      order,
    },
  )

  return response.data
}
