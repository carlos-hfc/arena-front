import { ComponentProps } from "react"

import { cn } from "@/utils/cn"

import { ButtonContainer } from "./styles"

interface ButtonProps extends ComponentProps<"button"> {
  containerClassName?: string
}

export function Button({
  className,
  containerClassName,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer className={cn(containerClassName)}>
      <span className="state-indicator" />
      <span className="button-bg" />
      <button
        className={cn(
          "flex justify-center items-center bg-transparent w-80 h-14 text-2xl disabled:opacity-40",
          className,
        )}
        {...props}
      />
    </ButtonContainer>
  )
}
