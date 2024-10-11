import { useNavigate } from "react-router-dom"

import mainGif from "@/assets/login-animation.gif"
import { Button } from "@/components/button"

import { CircleGif, LoginWrapper } from "./styles"

export function Login() {
  const navigate = useNavigate()

  return (
    <LoginWrapper className="h-dvh flex flex-col gap-12 w-full relative overflow-hidden">
      <Button onClick={() => navigate("/choose-screen")}>Professor</Button>
      <Button onClick={() => navigate("/student/sessions")}>Aluno</Button>
      <Button onClick={() => navigate("/panel/sessions")}>Painel</Button>

      <CircleGif
        className="absolute"
        src={mainGif}
        alt="Animação de uma esfera conectada por linhas azuis"
      />
    </LoginWrapper>
  )
}
