import { useNavigate } from "react-router-dom"

// import gif from "@/assets/main-gif.gif"
import { Button } from "@/components/button"

import { LoginWrapper } from "./styles"

export function Login() {
  const navigate = useNavigate()

  return (
    <LoginWrapper className="h-dvh flex flex-col gap-12">
      <Button onClick={() => navigate("/choose-screen")}>Professor</Button>
      <Button onClick={() => navigate("/student/sessions")}>Aluno</Button>
      <Button>Painel</Button>

      {/* <img src={gif} /> */}
    </LoginWrapper>
  )
}
