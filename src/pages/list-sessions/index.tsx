import { useQuery } from "@tanstack/react-query"
import { Star } from "lucide-react"

import lockGif from "@/assets/lock.gif"
import radarGif from "@/assets/radar.gif"
import bgGif from "@/assets/particles2.gif"
import { BackButton } from "@/components/back-button"
import { listReleasedSessions } from "@/services/list-released-sessions"
import { listSessions } from "@/services/list-sessions"

import {
  IconWrapper,
  PageWrapper,
  ParticlesGif,
  RadarGif,
  SessionName,
  SessionsContainer,
} from "./styles"

interface SessionsProps {
  viewMode: "student" | "professor" | "panel"
}

export function ListSessions({ viewMode }: SessionsProps) {
  const { data } = useQuery({
    queryKey: [viewMode === "professor" ? "sessions" : "released-sessions"],
    queryFn: viewMode === "professor" ? listSessions : listReleasedSessions,
  })

  return (
    <PageWrapper className="flex-1 flex flex-col justify-center items-center">
      <ParticlesGif
        src={bgGif}
        alt="Ilustração de partículas em movimento"
      />
      <div className="flex justify-center items-center gap-4">
        <h1 className="text-4xl text-shadow-yellow">Sessão</h1>
        <img
          src={lockGif}
          alt="Ilustração de cadeado destrancando"
          className="w-8 mix-blend-exclusion"
        />
      </div>
      <SessionsContainer>
        <RadarGif
          src={radarGif}
          alt="Ilustração de um radar"
        />
        <div className="sessions-content p-28 space-y-8">
          {data?.sessions && data?.sessions.length > 0 && (
            <div className="flex flex-col gap-20 text-right">
              {data.sessions.map((session, index) => {
                const pathList = {
                  professor: `/sessions/${session.id}`,
                  panel: `/panel/sessions/${session.id}`,
                  student: `/student/sessions/${session.id}/teams`,
                }

                return (
                  <SessionName
                    key={session.id}
                    to={pathList[viewMode]}
                    className="text-4xl text-shadow flex gap-6 items-center justify-end"
                  >
                    {("00" + (index + 1)).slice(-3)}
                    {" - "}
                    {session.name}

                    <IconWrapper>
                      <Star
                        size={30}
                        color="#177296"
                      />
                    </IconWrapper>
                  </SessionName>
                )
              })}
            </div>
          )}
        </div>
      </SessionsContainer>
      <BackButton to="/choose-screen" />
    </PageWrapper>
  )
}
