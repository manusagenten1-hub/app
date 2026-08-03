"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Clock, Dumbbell, AlertTriangle, Lightbulb, Activity, Target } from "lucide-react"
import { type Exercise } from "@/types"

interface ExerciseModalProps {
  exercise: Exercise | null
  isOpen: boolean
  onClose: () => void
}

export function ExerciseModal({ exercise, isOpen, onClose }: ExerciseModalProps) {
  if (!exercise) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl border-b border-slate-100 p-4 sm:p-6 flex flex-col gap-2">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="bg-purple-50 text-[#8B5CF6] hover:bg-purple-100 text-[10px] sm:text-xs">
                {exercise.categoria || "Categoria"}
              </Badge>
              <Badge variant="outline" className="text-[#666666] border-gray-200 text-[10px] sm:text-xs">
                {exercise.nivel || "Nível"}
              </Badge>
            </div>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-[#111111]">{exercise.nome || "Nome do Exercício"}</DialogTitle>
          </DialogHeader>
        </div>

        <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-50 text-center">
              <Dumbbell className="h-5 w-5 text-[#8B5CF6] mb-2" />
              <span className="text-xs text-[#666666] font-bold uppercase tracking-wider">Séries</span>
              <span className="text-lg font-bold text-[#111111]">{exercise.series || "-"}</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-50 text-center">
              <Activity className="h-5 w-5 text-[#8B5CF6] mb-2" />
              <span className="text-xs text-[#666666] font-bold uppercase tracking-wider">Repetições</span>
              <span className="text-lg font-bold text-[#111111]">{exercise.repeticoes || "-"}</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-50 text-center">
              <Clock className="h-5 w-5 text-[#8B5CF6] mb-2" />
              <span className="text-xs text-[#666666] font-bold uppercase tracking-wider">Descanso</span>
              <span className="text-lg font-bold text-[#111111]">{exercise.descanso || "-"}</span>
            </div>
          </div>

          <div className="space-y-6">
            <section>
              <h4 className="flex items-center gap-2 text-sm font-bold text-[#111111] mb-3 uppercase tracking-wider">
                <Target className="h-4 w-4 text-[#8B5CF6]" />
                Grupos Musculares
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-purple-50 text-[#8B5CF6]">{exercise.grupoMuscular || "Músculo Principal"}</Badge>
                {exercise.musculosSecundarios?.length ? (
                  exercise.musculosSecundarios.map((m, i) => (
                    <Badge variant="outline" key={i} className="text-[#666666]">{m}</Badge>
                  ))
                ) : (
                  <Badge variant="outline" className="text-[#666666]">Músculo Secundário Placeholder</Badge>
                )}
              </div>
            </section>

            <section>
              <h4 className="text-sm font-bold text-[#111111] mb-2 uppercase tracking-wider">Objetivo</h4>
              <p className="text-sm text-[#666666] leading-relaxed">
                {exercise.objetivo || "Descrição do objetivo do exercício será inserida aqui."}
              </p>
            </section>
            
            <section>
              <h4 className="text-sm font-bold text-[#111111] mb-2 uppercase tracking-wider">Benefícios</h4>
              <ul className="list-disc pl-5 text-sm text-[#666666] space-y-1">
                {exercise.beneficios?.length ? (
                  exercise.beneficios.map((b, i) => <li key={i}>{b}</li>)
                ) : (
                  <>
                    <li>Benefício 1</li>
                    <li>Benefício 2</li>
                  </>
                )}
              </ul>
            </section>

            <section>
              <h4 className="text-sm font-bold text-[#111111] mb-2 uppercase tracking-wider">Execução (Passo a Passo)</h4>
              <ol className="list-decimal pl-5 text-sm text-[#666666] space-y-2">
                {exercise.passoAPasso?.length ? (
                  exercise.passoAPasso.map((p, i) => <li key={i}>{p}</li>)
                ) : (
                   <>
                    <li>Passo 1 da execução</li>
                    <li>Passo 2 da execução</li>
                  </>
                )}
              </ol>
            </section>

            <section className="rounded-2xl bg-red-50 p-5 border border-red-100">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-red-900 mb-2">
                <AlertTriangle className="h-4 w-4 text-red-500" />
                Erros Comuns
              </h4>
              <ul className="list-disc pl-5 text-sm text-red-800 space-y-1">
                 {exercise.errosComuns?.length ? (
                  exercise.errosComuns.map((e, i) => <li key={i}>{e}</li>)
                ) : (
                  <li>Erro comum a ser evitado</li>
                )}
              </ul>
            </section>

            <section className="rounded-2xl bg-amber-50 p-5 border border-amber-100">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-amber-900 mb-2">
                <Lightbulb className="h-4 w-4 text-amber-500" />
                Dicas Importantes
              </h4>
              <ul className="list-disc pl-5 text-sm text-amber-800 space-y-1">
                {exercise.dicas?.length ? (
                  exercise.dicas.map((d, i) => <li key={i}>{d}</li>)
                ) : (
                  <li>Dica importante para maximizar resultados</li>
                )}
              </ul>
            </section>

             <section>
              <h4 className="text-sm font-bold text-[#111111] mb-2 uppercase tracking-wider">Observações Adicionais</h4>
              <p className="text-sm text-[#666666] leading-relaxed italic">
                {exercise.observacoes || "Nenhuma observação."}
              </p>
              
              {/* Added specifically for the 21 Day Program recommendation */}
              <div className="mt-4 p-4 bg-purple-50 rounded-xl border border-purple-100">
                 <p className="text-xs text-[#8B5CF6] font-medium leading-relaxed">
                   <strong>Equipamentos opcionais:</strong> Caso você não possua halteres, utilize uma mochila com livros, garrafas de água, sacos de arroz ou outros objetos seguros para adicionar resistência aos exercícios. O foco é manter a técnica correta antes de aumentar a carga.
                 </p>
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
