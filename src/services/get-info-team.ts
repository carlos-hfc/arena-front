import { api } from "@/lib/axios"
import { getToken } from "@/lib/cookies"

export interface GetInfoTeamResponse {
  team: {
    id: string
    sessionId: string
    name: string
    teamGoals: {
      goalId: string
    }[]
    teamCards: {
      id: string
      scored: boolean
      createdAt: Date
      teamId: string
      cardId: string
    }[]
  }
}

interface GetInfoTeamRequest {
  sessionId: string
  teamId: string
}

export async function getInfoTeam({ sessionId, teamId }: GetInfoTeamRequest) {
  const token = getToken()

  const response = await api.get<GetInfoTeamResponse>(
    `/sessions/${sessionId}/teams/${teamId}/info`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  return response.data
}
