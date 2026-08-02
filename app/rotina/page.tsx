import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Lock, Timer } from "lucide-react"
import Link from "next/link"
import { ROUTINE_DAYS } from "@/lib/routine"

export default function RotinaPage() {
  const days = ROUTINE_DAYS
  
  // Mock progress state
  const completedDays = 5
  const currentDay = 6

  return (
    <div className="mx-auto max-w-4xl p-6 sm:p-10 space-y-8 animate-in fade-in duration-500">
      <header className="space-y-4">
        <div>
          <Badge className="bg-purple-50 text-[#8B5CF6] hover:bg-purple-100 mb-2">Programa Completo</Badge>
          <h1 className="text-3xl font-bold tracking-tight text-[#111111]">
            Rotina dos <span className="text-[#8B5CF6]">21 Dias</span>
          </h1>
        </div>
        <p className="text-lg text-[#666666]">
          Sua jornada para transformar e empinar seus glúteos.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {days.map((diaTreino) => {
          const dia = diaTreino.dia
          const isCompleted = dia <= completedDays
          const isCurrent = dia === currentDay
          const isLocked = dia > currentDay

          return (
            <Link key={dia} href={isLocked ? "#" : `/rotina/${dia}`} passHref>
              <Card 
                className={`group relative overflow-hidden transition-all ${
                  isLocked 
                    ? "opacity-60 cursor-not-allowed bg-slate-50" 
                    : "hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                } ${isCurrent ? "ring-2 ring-violet-500 shadow-sm" : ""}`}
              >
                {isCurrent && (
                  <div className="absolute inset-0 bg-violet-500/5 pointer-events-none" />
                )}
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-sm font-bold uppercase tracking-wider ${
                      isCurrent ? "text-[#8B5CF6]" : "text-[#666666]"
                    }`}>
                      Dia {dia}
                    </span>
                    {isCompleted ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : isLocked ? (
                      <Lock className="h-5 w-5 text-gray-300" />
                    ) : (
                      <div className="h-2 w-2 rounded-full bg-[#8B5CF6]" />
                    )}
                  </div>
                  
                  <h3 className="font-bold text-[#111111] mb-2">{diaTreino.titulo}</h3>
                  <div className="flex items-center gap-1.5 text-sm font-bold text-[#666666]">
                    <Timer className="h-4 w-4" />
                    {diaTreino.tempo}
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
