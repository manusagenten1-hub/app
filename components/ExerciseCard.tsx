"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Dumbbell } from "lucide-react"
import { type Exercise } from "@/types"

interface ExerciseCardProps {
  exercise: Exercise
  onClick: (exercise: Exercise) => void
}

export function ExerciseCard({ exercise, onClick }: ExerciseCardProps) {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden transition-all hover:shadow-[0_-10px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1 flex flex-col h-full rounded-3xl p-5 border border-gray-100 shadow-sm bg-white relative"
      onClick={() => onClick(exercise)}
    >
      <div className="absolute top-3 right-3">
         <span className="bg-[#111111]/10 text-[#111111] text-[10px] font-bold px-2 py-1 rounded capitalize">
          {exercise.nivel || "Iniciante"}
        </span>
      </div>
      <div className="flex-1 mt-4">
        <div className="flex justify-between items-start gap-2">
          <h4 className="font-bold text-lg leading-tight text-[#111111] line-clamp-2">{exercise.nome || "Nome do Exercício"}</h4>
          <span className="bg-purple-50 text-[#8B5CF6] text-[10px] font-bold px-2 py-1 rounded shrink-0">
            {exercise.categoria || "Categoria"}
          </span>
        </div>
        <p className="text-xs text-[#666666] mt-1 line-clamp-1">Foco: {exercise.grupoMuscular || "Grupo Muscular"}</p>
        
        <div className="flex items-center gap-1.5 text-xs text-[#666666] mt-2">
          <Clock className="h-3 w-3" />
          <span>{exercise.tempoExecucao || "1 min"}</span>
        </div>
      </div>
      <button className="w-full mt-4 py-3 border border-gray-100 rounded-xl text-xs font-bold text-[#111111] hover:bg-gray-50 transition-colors">
        Ver Detalhes
      </button>
    </Card>
  )
}
