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
      className={cn("w-auto h-auto absolute left-12 bottom-12", className)}
      {...props}
    >
      <svg
        width="77"
        height="77"
        viewBox="0 0 77 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_29_1362)">
          <path
            d="M64.9689 67.375C64.5474 67.378 64.1325 67.2701 63.7657 67.0622L18.047 40.5935C17.6767 40.3836 17.3687 40.0793 17.1544 39.7115C16.9401 39.3437 16.8271 38.9257 16.8271 38.5C16.8271 38.0744 16.9401 37.6564 17.1544 37.2886C17.3687 36.9208 17.6767 36.6165 18.047 36.4066L63.7657 9.93786C64.1315 9.72666 64.5465 9.61548 64.9689 9.61548C65.3913 9.61548 65.8062 9.72666 66.172 9.93786C66.5392 10.1499 66.8439 10.4551 67.0551 10.8227C67.2664 11.1904 67.3768 11.6073 67.3751 12.0313V64.9688C67.3751 65.607 67.1216 66.219 66.6703 66.6703C66.2191 67.1215 65.607 67.375 64.9689 67.375ZM24.0626 38.5L62.5626 60.806V16.1941L24.0626 38.5Z"
            fill="url(#paint0_linear_29_1362)"
          />
          <path
            d="M9.625 9.625H4.8125V67.375H9.625V9.625Z"
            fill="url(#paint1_linear_29_1362)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_29_1362"
            x1="42.1011"
            y1="9.61548"
            x2="42.1011"
            y2="67.3751"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#31CBF4" />
            <stop
              offset="1"
              stopColor="#1D768E"
              stopOpacity="0"
            />
          </linearGradient>
          <linearGradient
            id="paint1_linear_29_1362"
            x1="7.21875"
            y1="9.625"
            x2="7.21875"
            y2="67.375"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#31CBF4" />
            <stop
              offset="1"
              stopColor="#1D768E"
              stopOpacity="0"
            />
          </linearGradient>
          <clipPath id="clip0_29_1362">
            <rect
              width="77"
              height="77"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    </Link>
  )
})

BackButton.displayName = "BackButton"
