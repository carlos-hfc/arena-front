import { api } from "@/lib/axios"

interface ReleaseSessionRequest {
  sessionId: string
}

export async function releaseSession({ sessionId }: ReleaseSessionRequest) {
  const response = await api.patch<{ panelId: string }>(
    `/sessions/${sessionId}/release`,
  )

  return response.data
}
