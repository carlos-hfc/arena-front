import { useQuery } from "@tanstack/react-query"
import { MinusSquareIcon, PlusSquareIcon, SaveIcon } from "lucide-react"
import { useState } from "react"
import { useParams } from "react-router-dom"

import { BackButton } from "@/components/back-button"
import { Input } from "@/components/input"
import { queryClient } from "@/lib/react-query"
import { createBoost } from "@/services/create-boost"
import { getSession } from "@/services/get-session"
import { cn } from "@/utils/cn"

interface Boosts {
  description: string
  createdAt?: string
}

export function RegisterBoosts() {
  const { sessionId } = useParams() as { sessionId: string }

  const [boosts, setBoosts] = useState<Boosts[]>([])

  const { data } = useQuery({
    queryKey: ["session", sessionId],
    queryFn: () => getSession(sessionId),
  })

  function addBoost() {
    setBoosts(prev => [...prev, { description: "" }])
  }

  function removeBoost(index: number) {
    const remainingBoosts = boosts.filter((_, i) => i !== index)
    setBoosts(remainingBoosts)
  }

  async function handleSaveBoost(boost: Boosts) {
    if (boost.createdAt) return

    try {
      await createBoost({
        sessionId,
        description: boost.description,
      })

      queryClient.invalidateQueries({
        queryKey: ["session", sessionId],
      })

      setBoosts([])
    } catch (error) {}
  }

  return (
    <div className="flex flex-col flex-1 py-20 mx-auto max-w-4xl w-full gap-10">
      <div className="flex justify-between">
        <h1 className="text-4xl text-white">Boosts</h1>

        <button
          onClick={addBoost}
          className="flex items-center gap-3 text-rose-600"
        >
          Criar um novo boost
          <PlusSquareIcon />
        </button>
      </div>

      <div className="space-y-6">
        {[...((data?.session && data?.session?.boosts) ?? []), ...boosts].map(
          (boost, i) => (
            <div
              key={i}
              className="flex items-center gap-4"
            >
              <label className="text-blue-light text-2xl">
                Boost - 0{i + 1}
              </label>
              <Input
                className="ml-auto h-10"
                placeholder="Descrição do boost"
                value={boost.description}
                onChange={e => {
                  boost.description = e.target.value
                  setBoosts([...boosts])
                }}
                readOnly={Boolean(boost.createdAt)}
                disabled={Boolean(boost.createdAt)}
              />
              <SaveIcon
                className={cn(
                  "text-blue-light cursor-pointer",
                  boost.createdAt && "pointer-events-none opacity-50",
                )}
                onClick={() => handleSaveBoost(boost)}
              />
              <MinusSquareIcon
                className={cn(
                  "text-rose-500 cursor-pointer",
                  boost.createdAt && "pointer-events-none opacity-50",
                )}
                onClick={() => removeBoost(i)}
              />
            </div>
          ),
        )}
      </div>

      <BackButton to={`/sessions/${sessionId}`}>Voltar</BackButton>
    </div>
  )
}
