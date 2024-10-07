import { api } from "@/lib/axios"

interface Session {
  id: string
  name: string
  releasedAt: string | null
}

export interface ListSessionsResponse {
  sessions: Session[]
}

export async function listSessions() {
  const response = await api.get<ListSessionsResponse>(`/sessions`)

  return response.data
}
