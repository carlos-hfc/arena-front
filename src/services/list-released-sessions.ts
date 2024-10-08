import { api } from "@/lib/axios"

interface Session {
  id: string
  name: string
  releasedAt: string
}

export interface ListReleasedSessionsResponse {
  sessions: Session[]
}

export async function listReleasedSessions() {
  const response =
    await api.get<ListReleasedSessionsResponse>(`/sessions/released`)

  return response.data
}
