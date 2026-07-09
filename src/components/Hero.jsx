import { Sparkles } from "lucide-react"

export default function Hero({ name = "User" }) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-base-200 border border-base-300 rounded-xl p-8 flex items-center gap-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
          <Sparkles className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-base-content">
            Welcome, {name}
          </h1>
          <p className="text-base-content/60 mt-1">
            Make your life easier by using it !!!
          </p>
        </div>
      </div>
    </div>
  )
}
