import { useNavigate } from "react-router-dom"

import { Button } from "@/components/button"

export function Login() {
  const navigate = useNavigate()

  return (
    <div className="h-dvh bg-zinc-800 flex flex-col items-center justify-center gap-12">
      <Button onClick={() => navigate("/choose-screen")}>Professor</Button>
      <Button onClick={() => navigate("/student/sessions")}>Aluno</Button>
      <Button>Painel</Button>
    </div>
  )
}
