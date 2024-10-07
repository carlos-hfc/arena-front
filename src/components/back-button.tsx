import { ComponentProps, ComponentRef, forwardRef } from "react"
import { Link } from "react-router-dom"

import { cn } from "@/utils/cn"

export const BackButton = forwardRef<
  ComponentRef<typeof Link>,
  ComponentProps<typeof Link>
>(({ className, ...props }, ref) => {
  return (
    <Link
      ref={ref}
      className={cn(
        "text-white flex justify-center items-center bg-zinc-700 w-60 h-12 border-2 border-rose-500 text-2xl absolute left-12 bottom-12",
        className,
      )}
      {...props}
    />
  )
})

BackButton.displayName = "BackButton"
