import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { useParams } from "react-router-dom"

import { BackButton } from "@/components/back-button"
import { Card } from "@/components/card"
import { useAppWebSocket } from "@/lib/react-use-websocket"
import { getSession } from "@/services/get-session"
import { PanelItem } from "@/types/Panel"

import { PanelContainer } from "./styles"

export function Panel() {
  const { sessionId } = useParams() as { sessionId: string }

  const [panelItems, setPanelItems] = useState<PanelItem[]>([])

  const { data } = useQuery({
    queryKey: ["session", sessionId],
    queryFn: () => getSession(sessionId),
  })

  const { sendMessage } = useAppWebSocket("panel", {
    queryParams: { panelId: data?.session.panelId ?? "" },
    onOpen: () => {
      console.log(`Connected to App WS`)
      sendMessage(JSON.stringify({ action: "init" }))
    },
    onMessage: event => {
      try {
        const teamsData = JSON.parse(event.data)
        setPanelItems(teamsData)
      } catch (error) {
        console.error("Failed to parse message:", error)
      }
    },
  })

  return (
    <PanelContainer className="min-h-dvh flex flex-col gap-16 justify-center items-center py-20 px-12">
      <h2 className="text-shadow text-7xl">score</h2>
      <div className="flex gap-20 flex-wrap w-full justify-center items-center">
        {panelItems.map(({ team }) => (
          <Card key={team.id}>
            <p className="flex flex-col">
              <span className="text-2xl	text-shadow">{team.name}</span>
              <span className="text-8xl	text-shadow-yellow">
                {team.totalScore}
              </span>
            </p>

            <p className="flex flex-col">
              <span className="text-2xl	text-shadow">Objetivo: </span>
              <span className="text-3xl	text-shadow-yellow">
                {team.goalScore}
              </span>
            </p>

            <p className="flex flex-col">
              <span className="text-2xl	text-shadow">Cards: </span>
              <span className="text-3xl	text-shadow-yellow">
                {team.cardScore}
              </span>
            </p>
          </Card>
        ))}
      </div>
      <div className="self-end text-right">
        <h3 className="text-shadow text-4xl">Tempo</h3>
        <span className="text-shadow-pink text-7xl">20:00</span>
      </div>
      <BackButton to="/panel/sessions" />
    </PanelContainer>
  )
}
