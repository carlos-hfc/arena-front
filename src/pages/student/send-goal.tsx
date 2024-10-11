import { useQuery } from "@tanstack/react-query"
import { UploadIcon } from "lucide-react"
import { useParams } from "react-router-dom"

import { Input } from "@/components/input"
import { getInfoTeam } from "@/services/get-info-team"
import { getProfile } from "@/services/get-profile"
import { getSession } from "@/services/get-session"
import { cn } from "@/utils/cn"

export function SendGoal() {
  const { sessionId, teamId } = useParams() as {
    sessionId: string
    teamId: string
  }

  const { data: dataStudent } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  })
  const { data: dataSession } = useQuery({
    queryKey: ["session", sessionId],
    queryFn: () => getSession(sessionId),
  })
  const { data: dataInfoTeam } = useQuery({
    queryKey: ["info-team", { sessionId, teamId }],
    queryFn: () => getInfoTeam({ sessionId, teamId }),
  })

  if (!dataStudent?.student || !dataSession?.session || !dataInfoTeam?.team)
    return null

  return (
    <div className="flex-1 flex flex-col justify-end items-end h-full">
      <div className="pb-8 px-12 w-[580px] flex flex-col">
        <div className="text-blue-light">
          <h1 className="text-5xl text-right text-shadow capitalize">
            {dataStudent.student.name}
          </h1>
          <h2 className="text-5xl text-right text-shadow">
            RM {dataStudent.student.rm}
          </h2>
        </div>

        <div className="flex flex-col gap-8 items-end mt-16">
          {dataSession.session.goals.map((goal, i) => (
            <div
              key={goal.id}
              aria-disabled={Boolean(
                dataInfoTeam.team.teamGoals.find(
                  teamGoal => teamGoal.goalId === goal.id,
                ),
              )}
              className={cn(
                "w-full h-16 cursor-pointer relative rounded border-2 border-blue-light shadow-blue-light shadow flex items-center justify-between px-4 text-[#4e596a] hover:text-blue-light hover:text-shadow aria-disabled:opacity-50 aria-disabled:pointer-events-none",
              )}
            >
              <Input
                type="file"
                className="absolute inset-0 opacity-0 [&]:cursor-pointer [&::-webkit-file-upload-button]:cursor-pointer appearance-none"
              />
              <p className="text-xl pointer-events-none">
                Objetivo - {String(i + 1).padStart(2, "0")}
              </p>
              <UploadIcon className="text-blue-light text-shadow pointer-events-none size-8" />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-20">
          <div>
            <p className="text-[#4e596a] text-2xl">Cards</p>
            <span className="text-yellow-light text-shadow-yellow text-8xl">
              {String(dataInfoTeam.team.teamCards.length).padStart(2, "0")}
            </span>
          </div>
          <div>
            <p className="text-[#4e596a] text-2xl">Pontos</p>
            <span className="text-yellow-light text-shadow-yellow text-8xl">
              100
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
