import { Star } from "lucide-react"

import headerConnector from "@/assets/header-connector.png"

import { HeaderTitle, IconWrapper } from "./styles"

export function Header() {
  return (
    <header className="absolute top-8 right-4 flex flex-col items-end">
      <div className="flex flex-wrap gap-2 w-full">
        <IconWrapper>
          <Star
            size={35}
            color="#fff568"
            fill="#fff568"
          />
        </IconWrapper>
        <HeaderTitle className="text-2xl">Arena VR</HeaderTitle>
      </div>
      <img
        className="w-3/4 max-sm:w-3/6"
        src={headerConnector}
        alt="Linha conectora ilustrativa na cor azul"
      />
    </header>
  )
}
