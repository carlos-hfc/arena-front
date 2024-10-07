import { api } from "@/lib/axios"

interface Session {
  id: string
  name: string
  releasedAt: string | null
  teams: {
    id: string
    sessionId: string
    name: string
  }[]
  goals: {
    id: string
    sessionId: string
    description: string
    time: number
    order: number
  }[]
  cards: {
    id: string
    sessionId: string
    description: string
    createdAt: string
  }[]
  boosts: {
    id: string
    sessionId: string
    description: string
    createdAt: string
  }[]
}

export interface GetSessionResponse {
  session: Session
}

export async function getSession(sessionId: string) {
  const response = await api.get<GetSessionResponse>(`/sessions/${sessionId}`)

  return response.data
}
