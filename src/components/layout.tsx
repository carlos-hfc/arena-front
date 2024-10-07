import { Outlet } from "react-router-dom"

export function ProfessorLayout() {
  return (
    <div className="bg-zinc-800 min-h-dvh flex flex-col relative">
      <Outlet />
    </div>
  )
}
