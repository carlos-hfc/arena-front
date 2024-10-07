import { useQuery } from "@tanstack/react-query"
import { Fragment, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { createGoal } from "@/services/create-goal"
import { getSession } from "@/services/get-session"

const INITIAL_STATE = Array.from({ length: 3 }).map((_, i) => {
  return {
    id: i + 1,
    description: "",
    time: "",
  }
})

export function RegisterGoals() {
  const navigate = useNavigate()
  const { sessionId } = useParams() as { sessionId: string }

  const [goals, setGoals] = useState(INITIAL_STATE)

  const { data } = useQuery({
    queryKey: ["session", sessionId],
    queryFn: () => getSession(sessionId),
  })

  async function handleCreateGoals() {
    try {
      const res = await Promise.all(
        goals.map(
          async (goal, i) =>
            await createGoal({
              description: goal.description,
              sessionId,
              time: parseInt(goal.time),
              order: i + 1,
            }),
        ),
      )

      console.log(res)
    } catch (error) {}
  }

  const mappedGoals =
    data?.session && data.session?.goals?.length > 0
      ? data?.session.goals.sort((a, b) => a.order - b.order)
      : goals

  return (
    <div className="flex flex-col flex-1 justify-center mx-auto gap-20">
      <h1 className="text-4xl text-white">Objetivos</h1>

      <div className="grid grid-cols-2 gap-8">
        {mappedGoals.map((goal, i) => (
          <Fragment key={goal.id}>
            <div className="space-y-8 flex-1">
              <div className="flex items-center gap-4">
                <label className="text-blue-light  text-2xl flex-1">
                  Objetivo - 0{i + 1}
                </label>
                <Input
                  className="h-12"
                  placeholder="Descrição do objetivo"
                  disabled={data?.session && data.session.goals.length > 0}
                  value={goal.description}
                  onChange={e => {
                    goal.description = e.target.value
                    setGoals([...goals])
                  }}
                />
              </div>
            </div>

            <div className="space-y-8 flex-1">
              <div className="flex items-center gap-4">
                <label className="text-blue-light  text-2xl flex-1">
                  Tempo - 0{i + 1}
                </label>
                <Input
                  className="h-12"
                  type="number"
                  placeholder="Tempo (min)"
                  disabled={data?.session && data.session.goals.length > 0}
                  min={1}
                  value={goal.time}
                  onChange={e => {
                    goal.time = e.target.value
                    setGoals([...goals])
                  }}
                />
              </div>
            </div>
          </Fragment>
        ))}
      </div>

      <div className="flex justify-between items-center w-full">
        <Button onClick={() => navigate(`/sessions/${sessionId}`)}>
          Voltar
        </Button>

        <Button
          onClick={handleCreateGoals}
          disabled={Boolean(data?.session.releasedAt)}
        >
          Salvar
        </Button>
      </div>
    </div>
  )
}
