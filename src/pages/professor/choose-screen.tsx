import { useNavigate } from "react-router-dom"

import { Button } from "@/components/button"

export function ChooseScreen() {
  const navigate = useNavigate()

  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-16">
      <Button onClick={() => navigate("/register-session")}>
        Criar sessão
      </Button>
      <Button onClick={() => navigate("/list-sessions")}>Entrar</Button>
    </div>
  )
}
