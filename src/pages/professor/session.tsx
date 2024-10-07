import { useQuery } from "@tanstack/react-query"
import { Link, useParams } from "react-router-dom"

import { BackButton } from "@/components/back-button"
import { Button } from "@/components/button"
import { getSession } from "@/services/get-session"
import { releaseSession } from "@/services/release-session"

export function Session() {
  const { sessionId } = useParams() as { sessionId: string }

  const { data } = useQuery({
    queryKey: ["session", sessionId],
    queryFn: () => getSession(sessionId),
  })

  if (!data?.session) return null

  async function handleSubmitSession() {
    if (data?.session.releasedAt) return

    try {
      const response = await releaseSession({ sessionId })

      console.log(response)
    } catch (error) {}
  }

  return (
    <div className="max-w-xl flex flex-col flex-1 justify-center mx-auto items-center gap-5">
      <h1 className="text-4xl text-white text-center">
        Sessão {data.session.name}
      </h1>

      <Link
        to={`/sessions/${sessionId}/goals`}
        className="text-white flex justify-center items-center bg-zinc-700 w-80 h-12 border-2 border-rose-500 text-2xl"
      >
        Objetivos
      </Link>
      <Link
        className="text-white flex justify-center items-center bg-zinc-700 w-80 h-12 border-2 border-rose-500 text-2xl"
        to={`/sessions/${sessionId}/cards`}
      >
        Cards
      </Link>
      <Link
        className="text-white flex justify-center items-center bg-zinc-700 w-80 h-12 border-2 border-rose-500 text-2xl"
        to={`/sessions/${sessionId}/boosts`}
      >
        Boosts
      </Link>
      <Button
        disabled={Boolean(data.session.releasedAt)}
        onClick={handleSubmitSession}
      >
        Lançar
      </Button>

      <BackButton to="/list-sessions">Voltar</BackButton>
    </div>
  )
}
