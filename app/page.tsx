import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, Calendar, Flame, Timer, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl p-6 sm:p-10 space-y-8 animate-in fade-in duration-500">
      
      {/* Header */}
      <header className="space-y-2">
        <p className="text-[#666666] text-sm uppercase tracking-widest font-semibold">Olá, Aluna ✨</p>
        <h1 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
          Hoje é o Dia 6
        </h1>
      </header>

      {/* Progress Overview */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="bg-[#8B5CF6] rounded-3xl p-6 text-white relative overflow-hidden shadow-xl shadow-purple-100 border-none">
          <CardContent className="p-0">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-white/80" />
                <span className="font-medium text-white/90">Sequência Atual</span>
              </div>
              <span className="text-3xl font-bold text-white">5 dias</span>
            </div>
            <Progress value={25} className="h-2 bg-white/20 [&>div]:bg-white relative z-10" />
            <p className="mt-3 text-sm text-white/80 relative z-10">
              Faltam 16 dias para completar o desafio.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex flex-col justify-center h-full space-y-4">
             <div className="flex items-center gap-4">
               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                 <CheckCircle2 className="h-6 w-6" />
               </div>
               <div>
                 <p className="text-sm font-bold uppercase tracking-wide text-[#666666]">Status Geral</p>
                 <p className="text-xl font-bold text-[#111111]">25% Concluído</p>
               </div>
             </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Workout Card */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Treino de Hoje</h2>
          <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-200 shadow-none">Dia 6</Badge>
        </div>
        
        <Card className="overflow-hidden border-2 border-purple-100 shadow-xl shadow-purple-50 relative group rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/5 to-transparent pointer-events-none" />
          <CardContent className="p-6 sm:p-8">
            <div className="mb-6 space-y-2">
              <span className="bg-purple-50 text-[#8B5CF6] text-[10px] font-bold px-2 py-1 rounded">Treino Recomendado</span>
              <h3 className="text-2xl font-bold text-[#111111]">Foco em Projeção</h3>
              <p className="text-[#666666]">Glúteo Máximo e Médio</p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-xs opacity-90 text-[#666666]">
                <Timer className="h-4 w-4" />
                22 Minutos
              </div>
              <div className="flex items-center gap-2 text-xs opacity-90 text-[#666666]">
                <Dumbbell className="h-4 w-4" />
                8 Exercícios
              </div>
            </div>

            <Link href="/rotina/6" passHref>
              <Button size="lg" className="w-full sm:w-auto gap-2 text-lg h-14 rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                <PlayCircle className="h-6 w-6" />
                Começar Treino
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Next Up / Preview */}
      <section className="pt-4 border-t border-gray-100">
         <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[#111111]">Próximos Dias</h2>
          <Link href="/rotina" className="text-sm font-bold text-[#8B5CF6] hover:text-[#7c4ce4]">
            Ver rotina completa
          </Link>
        </div>
        <div className="space-y-3">
          {[
            { dia: 7, titulo: "Integração", tempo: "25 Minutos", foco: "Trabalhar todos os grupos" },
            { dia: 8, titulo: "Volume Intenso", tempo: "25 Minutos", foco: "Aumentar a intensidade e o volume" }
          ].map((treino) => (
             <div key={treino.dia} className="flex items-center p-4 rounded-2xl bg-white border border-gray-100 shadow-sm opacity-80">
               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-50 text-[#666666] font-bold mr-4">
                 {treino.dia}
               </div>
               <div className="flex-1">
                 <h4 className="font-bold text-[#111111] line-clamp-1">{treino.titulo}</h4>
                 <p className="text-sm text-[#666666]">{treino.foco}</p>
               </div>
               <div className="text-sm font-bold text-gray-400 flex items-center gap-1">
                 <Timer className="h-3 w-3" />
                 {treino.tempo}
               </div>
             </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function Dumbbell(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.4 14.4 9.6 9.6" />
      <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
      <path d="m21.5 21.5-1.4-1.4" />
      <path d="M3.9 3.9 2.5 2.5" />
      <path d="M6.404 2.757a2 2 0 1 0-2.829 2.828l1.768-1.767a2 2 0 1 0 2.828 2.829L1.807 13.01a2 2 0 1 0-2.828 2.829l1.767-1.768a2 2 0 1 0 2.829 2.828z" />
    </svg>
  )
}
