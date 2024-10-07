import { ComponentProps } from "react"

import { cn } from "@/utils/cn"

export function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "text-white bg-zinc-700 px-4 border-none outline-none focus-visible:ring-2 focus-visible:ring-rose-500",
        className,
      )}
      {...props}
    />
  )
}
