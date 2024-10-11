import { BackButton } from "@/components/back-button"
import { Card } from "@/components/card"

export function Panel() {
  return (
    <main className="min-h-dvh flex flex-col gap-16 justify-center items-center py-60 px-12">
      <h2 className="text-shadow text-7xl">score</h2>
      <div className="flex gap-20 flex-wrap w-full justify-center items-center">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="self-end text-right">
        <h3 className="text-shadow text-4xl">Tempo</h3>
        <span className="text-shadow-pink text-7xl">20:00</span>
      </div>
      <BackButton to="/panel/sessions" />
    </main>
  )
}
