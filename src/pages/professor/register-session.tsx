import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

import { BackButton } from "@/components/back-button"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { api } from "@/lib/axios"

export function RegisterSession() {
  const navigate = useNavigate()

  const [name, setName] = useState("")

  async function handleCreateSession(event: FormEvent) {
    event.preventDefault()

    try {
      const { data } = await api.post<{ sessionId: string }>("/sessions", {
        name,
      })

      navigate(`/sessions/${data.sessionId}`)
    } catch (error) {}
  }

  return (
    <form
      className="max-w-xl flex flex-col flex-1 justify-center mx-auto items-center gap-5"
      onSubmit={handleCreateSession}
    >
      <h1 className="text-4xl text-white text-center">Criar sessão</h1>

      <Input
        className="h-16 text-center text-xl"
        placeholder="Digite o nome da sessão"
        value={name}
        onChange={e => setName(e.target.value.toUpperCase())}
      />

      <Button type="submit">Salvar</Button>

      <BackButton to="/choose-screen">Voltar</BackButton>
    </form>
  )
}
