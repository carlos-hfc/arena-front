import { ChangeEvent, FormEvent, useState } from "react"
import { useParams } from "react-router-dom"

import { BackButton } from "@/components/back-button"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { setToken } from "@/lib/cookies"
import { registerStudent } from "@/services/register-student"

const INITIAL_STATE = {
  name: "",
  rm: "",
}

export function RegisterStudent() {
  const { teamId } = useParams() as { teamId: string }

  const [student, setStudent] = useState(INITIAL_STATE)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setStudent(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  async function handleRegisterStudent(event: FormEvent) {
    event.preventDefault()

    try {
      const { token } = await registerStudent({
        name: student.name,
        rm: Number(student.rm),
        teamId,
      })

      setToken(token)
    } catch (error) {}
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="p-8 w-1/2 text-white space-y-8">
        <h1 className="text-5xl text-center">Digite nome e RM:</h1>

        <form
          className="space-y-4"
          onSubmit={handleRegisterStudent}
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <Input
              placeholder="Digite seu nome"
              name="name"
              value={student.name}
              onChange={handleChange}
              className="h-16 text-center text-xl"
            />
            <Input
              type="number"
              placeholder="Digite seu RM"
              name="rm"
              value={student.rm}
              onChange={handleChange}
              className="h-16 text-center text-xl appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              min={1000}
            />
          </div>

          <Button className="mx-auto">Start</Button>
        </form>
      </div>

      <BackButton to="/">Voltar</BackButton>
    </div>
  )
}
