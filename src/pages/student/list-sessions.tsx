import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

import { BackButton } from "@/components/back-button"
import { listReleasedSessions } from "@/services/list-released-sessions"

export function ListSessionsStudent() {
  const { data } = useQuery({
    queryKey: ["released-sessions"],
    queryFn: listReleasedSessions,
  })

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="p-8 border-2 border-rose-500 bg-zinc-700 w-1/2 text-white space-y-8">
        <h1 className="text-5xl">Sessões:</h1>

        {data?.sessions && data?.sessions.length > 0 && (
          <div className="flex flex-col gap-2 max-h-96 overflow-y-auto">
            {data.sessions.map(session => (
              <Link
                key={session.id}
                to={`/student/sessions/${session.id}/teams`}
                className="text-xl hover:text-zinc-400 w-max"
              >
                {session.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <BackButton to="/">Voltar</BackButton>
    </div>
  )
}
