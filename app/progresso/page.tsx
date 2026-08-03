"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Flame, Trophy, Timer, Calendar as CalendarIcon, CheckCircle2 } from "lucide-react"
import { useProgress } from "@/components/ProgressProvider"

export default function ProgressoPage() {
  const { progress } = useProgress()
  const diasConcluidos = progress.completed_days.length
  
  const data = {
    diasConcluidos: diasConcluidos,
    diasRestantes: 21 - diasConcluidos,
    sequenciaAtual: progress.streak,
    maiorSequencia: progress.best_streak,
    minutosTreinados: progress.total_minutes,
    treinosConcluidos: progress.total_workouts,
    percentualGeral: Math.round((diasConcluidos / 21) * 100),
  }

  // Generate calendar (21 days)
  const calendarDays = Array.from({ length: 21 }, (_, i) => {
    const dayNum = i + 1;
    return {
      date: dayNum,
      isCompleted: progress.completed_days.includes(dayNum),
      isToday: progress.current_day === dayNum,
    }
  })

  return (
    <div className="mx-auto max-w-4xl p-4 sm:p-10 space-y-6 sm:space-y-8 animate-in fade-in duration-500">
      <header className="space-y-1 sm:space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          Seu <span className="text-violet-500">Progresso</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-500">
          Acompanhe sua evolução e celebre cada conquista.
        </p>
      </header>

      {/* Main Stats Grid */}
      <div className="grid gap-2 sm:gap-4 grid-cols-2">
        <div className="bg-gray-50 rounded-2xl p-4">
          <span className="block text-[#666666] text-[10px] font-bold uppercase tracking-wide mb-1">Sequência Atual</span>
          <p className="text-xl font-bold text-[#111111]">{data.sequenciaAtual} dias</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-4">
          <span className="block text-[#666666] text-[10px] font-bold uppercase tracking-wide mb-1">Concluídos</span>
          <p className="text-xl font-bold text-[#111111]">{data.treinosConcluidos} treinos</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-4">
          <span className="block text-[#666666] text-[10px] font-bold uppercase tracking-wide mb-1">Tempo Total</span>
          <p className="text-xl font-bold text-[#111111]">{data.minutosTreinados} min</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-4">
          <span className="block text-[#666666] text-[10px] font-bold uppercase tracking-wide mb-1">Recorde</span>
          <p className="text-xl font-bold text-[#111111]">{data.maiorSequencia} dias</p>
        </div>
      </div>

      {/* Challenge Progress */}
      <Card className="bg-white">
        <CardContent className="p-6 sm:p-8 space-y-6">
           <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-slate-900">Desafio de 21 Dias</h3>
              <span className="font-bold text-violet-600">{data.percentualGeral}%</span>
            </div>
            <Progress value={data.percentualGeral} className="h-3 bg-slate-100" />
          </div>
          
          <div className="flex items-center justify-between text-sm">
             <div className="text-slate-500">
               <span className="font-bold text-slate-900">{data.diasConcluidos}</span> dias completos
             </div>
             <div className="text-slate-500">
               <span className="font-bold text-slate-900">{data.diasRestantes}</span> dias restantes
             </div>
          </div>
        </CardContent>
      </Card>

      {/* Simple Calendar */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <CalendarIcon className="h-5 w-5 text-slate-400" />
          Dias do Programa
        </h2>
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="grid grid-cols-7 gap-2 sm:gap-4 text-center">
              {calendarDays.map((day, i) => (
                <div 
                  key={i}
                  className={`
                    aspect-square flex items-center justify-center rounded-full text-sm font-medium transition-colors
                    ${day.isCompleted ? 'bg-violet-500 text-white shadow-sm' : 
                      day.isToday ? 'border-2 border-violet-500 text-violet-700 font-bold' : 
                      'bg-slate-50 text-slate-600'}
                  `}
                >
                  {day.date}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
