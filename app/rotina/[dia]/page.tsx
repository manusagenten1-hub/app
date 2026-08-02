"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Timer, PlayCircle, CheckCircle2, ChevronLeft, Dumbbell, Activity, Clock } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ROUTINE_DAYS } from "@/lib/routine"

export default function DiaTreinoPage() {
  const params = useParams()
  const diaNumber = parseInt(params.dia as string, 10)
  
  const diaTreino = ROUTINE_DAYS.find(d => d.dia === diaNumber)
  
  if (!diaTreino) {
    return <div className="p-10">Dia não encontrado.</div>
  }

  const exercicios = diaTreino.exercicios

  return (
    <div className="mx-auto max-w-3xl p-6 sm:p-10 space-y-8 animate-in fade-in duration-500 pb-24">
      {/* Back button */}
      <Link href="/rotina" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Voltar para rotina
      </Link>

      <header className="space-y-4 text-center sm:text-left">
        <Badge className="bg-purple-50 text-[#8B5CF6] hover:bg-purple-100">Dia {diaTreino.dia}</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
          {diaTreino.titulo}
        </h1>
        <p className="text-lg text-[#666666]">
          {diaTreino.foco}
        </p>

        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-4">
          <div className="flex items-center gap-2 text-sm font-medium text-[#666666] bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
            <Timer className="h-5 w-5 text-[#8B5CF6]" />
            {diaTreino.tempo}
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-[#666666] bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
             <Dumbbell className="h-5 w-5 text-[#8B5CF6]" />
            {exercicios.length} Exercícios
          </div>
        </div>
      </header>

      {/* Mensagem Motivacional */}
      <div className="rounded-2xl bg-purple-50 p-6 relative overflow-hidden">
        <h3 className="font-bold text-[#8B5CF6] mb-2 relative z-10 text-center text-sm uppercase tracking-widest">Foco de Hoje</h3>
        <p className="text-[#8B5CF6] text-sm leading-relaxed relative z-10 font-medium italic text-center">
          &quot;{diaTreino.mensagemMotivacional}&quot;
        </p>
      </div>

      {/* Lista de Exercícios */}
      <section className="mt-8 flex-1 bg-white rounded-t-[40px] p-8 border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
        <h2 className="text-xl font-bold text-[#111111] mb-6">Exercícios</h2>
        <div className="space-y-3">
          {exercicios.map((ex, index) => (
             <Card key={ex.id} className="group cursor-pointer hover:border-purple-200 transition-colors border-gray-100">
               <CardContent className="p-4 sm:p-5 flex items-center">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-50 text-[#666666] font-bold mr-4 text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#111111] mb-1">{ex.nome}</h4>
                    <div className="flex items-center gap-4 text-xs font-bold text-[#666666]">
                      <span className="flex items-center gap-1"><Dumbbell className="h-3 w-3"/> {ex.series} Séries</span>
                      <span className="flex items-center gap-1"><Activity className="h-3 w-3"/> {ex.repeticoes} Reps</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3"/> {ex.descanso} Descanso</span>
                    </div>
                  </div>
               </CardContent>
             </Card>
          ))}
        </div>
      </section>

      {/* Observações */}
      <section>
        <h3 className="font-semibold text-slate-900 mb-2">Observações para hoje</h3>
        <p className="text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
          Concentre-se na contração de pico. Segure 1 segundo na fase concêntrica de cada repetição.
        </p>
      </section>

      {/* Action Buttons */}
      <div className="fixed bottom-[80px] sm:bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-slate-100 flex flex-col sm:flex-row justify-center gap-4 z-40 sm:static sm:bg-transparent sm:border-none sm:p-0">
        <Button size="lg" className="w-full sm:w-auto h-14 rounded-2xl shadow-lg gap-2 text-sm font-bold tracking-wide">
          <PlayCircle className="h-6 w-6" />
          Começar Treino
        </Button>
        <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 rounded-2xl gap-2 bg-white">
          <CheckCircle2 className="h-6 w-6 text-emerald-500" />
          Marcar como concluído
        </Button>
      </div>
    </div>
  )
}
