import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

import { BackButton } from "@/components/back-button"
import { Card } from "@/components/card"
import { getSession } from "@/services/get-session"

export function Panel() {
  const { sessionId } = useParams() as { sessionId: string }

  const { data } = useQuery({
    queryKey: ["session", sessionId],
    queryFn: () => getSession(sessionId),
  })

  if (!data?.session) return

  return (
    <main className="min-h-dvh flex flex-col gap-16 justify-center items-center py-60 px-12">
      <h2 className="text-shadow text-7xl">score</h2>
      <div className="flex gap-20 flex-wrap w-full justify-center items-center">
        {data.session.teams.map(team => (
          <Card key={team.id}>
            <p className="flex flex-col">
              <span className="text-2xl	text-shadow">{team.name}</span>
              <span className="text-8xl	text-shadow-yellow">150</span>
            </p>

            <p className="flex flex-col">
              <span className="text-2xl	text-shadow">Objetivo: </span>
              <span className="text-3xl	text-shadow-yellow">1</span>
            </p>

            <p className="flex flex-col">
              <span className="text-2xl	text-shadow">Cards: </span>
              <span className="text-3xl	text-shadow-yellow">1</span>
            </p>
          </Card>
        ))}
      </div>
      <div className="self-end text-right">
        <h3 className="text-shadow text-4xl">Tempo</h3>
        <span className="text-shadow-pink text-7xl">20:00</span>
      </div>
      <BackButton to="/panel/sessions" />
    </main>
  )
}
