import { api } from "@/lib/axios"

interface Team {
  id: string
  sessionId: string
  name: string
}

export interface ListTeamsResponse {
  teams: Team[]
}

export async function listTeams(sessionId: string) {
  const response = await api.get<ListTeamsResponse>(
    `/sessions/${sessionId}/teams`,
  )

  return response.data
}
