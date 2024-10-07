import { ComponentProps } from "react"

import { cn } from "@/utils/cn"

export function Button({ className, ...props }: ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "text-white flex justify-center items-center bg-zinc-700 w-80 h-12 border-2 border-rose-500 text-2xl disabled:opacity-40",
        className,
      )}
      {...props}
    />
  )
}
