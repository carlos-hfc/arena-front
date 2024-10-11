import { ComponentProps } from "react"

import cardBorder from "@/assets/card-border.png"
import team from "@/assets/team-icon.svg"

import { CardBorder, CardContainer } from "./styles"

export function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <CardContainer {...props}>
      <CardBorder
        src={cardBorder}
        alt="Imagem ilustrativa da borda do elemento em azul"
        className="border-top"
      />
      <img
        src={team}
        alt="Ícone azul representando um time de 3 pessoas"
      />

      {props.children}

      <CardBorder
        src={cardBorder}
        alt="Imagem ilustrativa da borda do elemento em azul"
        className="border-bottom"
      />
    </CardContainer>
  )
}
