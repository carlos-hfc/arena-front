import { useQuery } from "@tanstack/react-query"
import { Link, useParams } from "react-router-dom"

import { BackButton } from "@/components/back-button"
import { listTeams } from "@/services/list-teams"

export function ListTeams() {
  const { sessionId } = useParams() as { sessionId: string }

  const { data } = useQuery({
    queryKey: ["teams", sessionId],
    queryFn: () => listTeams(sessionId),
  })

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="p-8 border-2 border-rose-500 bg-zinc-700 w-1/2 text-white space-y-8">
        <h1 className="text-5xl">Equipes:</h1>

        {data?.teams && data?.teams.length > 0 && (
          <div className="flex flex-col gap-2 max-h-96 overflow-y-auto">
            {data.teams.map(team => (
              <Link
                key={team.id}
                to={`/student/sessions/${sessionId}/teams/${team.id}/register`}
                className="text-xl hover:text-zinc-400 w-max"
              >
                {team.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <BackButton to="/">Voltar</BackButton>
    </div>
  )
}
