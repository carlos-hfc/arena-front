import { useQuery } from "@tanstack/react-query"
import { MinusSquareIcon, PlusSquareIcon, SaveIcon } from "lucide-react"
import { useState } from "react"
import { useParams } from "react-router-dom"

import { BackButton } from "@/components/back-button"
import { Input } from "@/components/input"
import { queryClient } from "@/lib/react-query"
import { createCard } from "@/services/create-card"
import { getSession } from "@/services/get-session"
import { cn } from "@/utils/cn"

interface Cards {
  description: string
  createdAt?: string
}

export function RegisterCards() {
  const { sessionId } = useParams() as { sessionId: string }

  const [cards, setCards] = useState<Cards[]>([])

  const { data } = useQuery({
    queryKey: ["session", sessionId],
    queryFn: () => getSession(sessionId),
  })

  function addCard() {
    setCards(prev => [...prev, { description: "" }])
  }

  function removeCard(index: number) {
    const remainingCards = cards.filter((_, i) => i !== index)
    setCards(remainingCards)
  }

  async function handleSaveCard(card: Cards) {
    if (card.createdAt) return

    try {
      await createCard({
        sessionId,
        description: card.description,
      })

      queryClient.invalidateQueries({
        queryKey: ["session", sessionId],
      })

      setCards([])
    } catch (error) {}
  }

  return (
    <div className="flex flex-col flex-1 py-20 mx-auto max-w-4xl w-full gap-10">
      <div className="flex justify-between">
        <h1 className="text-4xl text-white">Cards</h1>

        <button
          onClick={addCard}
          className="flex items-center gap-3 text-rose-600"
        >
          Criar um novo card
          <PlusSquareIcon />
        </button>
      </div>

      <div className="space-y-6">
        {[...((data?.session && data?.session?.cards) ?? []), ...cards].map(
          (card, i) => (
            <div
              key={i}
              className="flex items-center gap-4"
            >
              <label className="text-blue-light text-2xl">
                Card - 0{i + 1}
              </label>
              <Input
                className="ml-auto h-10"
                placeholder="Descrição do card"
                value={card.description}
                onChange={e => {
                  card.description = e.target.value
                  setCards([...cards])
                }}
                readOnly={Boolean(card.createdAt)}
                disabled={Boolean(card.createdAt)}
              />
              <SaveIcon
                className={cn(
                  "text-blue-light cursor-pointer",
                  card.createdAt && "pointer-events-none opacity-50",
                )}
                onClick={() => handleSaveCard(card)}
              />
              <MinusSquareIcon
                className={cn(
                  "text-rose-500 cursor-pointer",
                  card.createdAt && "pointer-events-none opacity-50",
                )}
                onClick={() => removeCard(i)}
              />
            </div>
          ),
        )}
      </div>

      <BackButton to={`/sessions/${sessionId}`}>Voltar</BackButton>
    </div>
  )
}
