import { Outlet } from "react-router-dom"

import { Header } from "../header"
import { LayoutBackground } from "./styles"

export function Layout() {
  return (
    <LayoutBackground className="min-h-dvh flex flex-col relative">
      <Header />
      <Outlet />
    </LayoutBackground>
  )
}
