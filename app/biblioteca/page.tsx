"use client"

import { useState } from "react"
import { ExerciseCard } from "@/components/ExerciseCard"
import { ExerciseModal } from "@/components/ExerciseModal"
import { Badge } from "@/components/ui/badge"
import { type Exercise } from "@/types"
import { EXERCISES } from "@/lib/exercises"

const CATEGORIES = ["Todos", "Musculação", "Pilates", "Calistenia"]

export default function BibliotecaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null)

  const filteredExercises = selectedCategory === "Todos"
    ? EXERCISES
    : EXERCISES.filter(ex => ex.categoria === selectedCategory)

  return (
    <div className="mx-auto max-w-7xl p-6 sm:p-10 space-y-8 animate-in fade-in duration-500">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-[#111111]">
          Biblioteca de <span className="text-[#8B5CF6]">Exercícios</span>
        </h1>
        <p className="text-[#666666]">
          Explore o catálogo completo de exercícios focados nos glúteos.
        </p>
      </header>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {CATEGORIES.map(category => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "secondary"}
            className="cursor-pointer px-4 py-2 text-sm whitespace-nowrap"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Exercise Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredExercises.map(exercise => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            onClick={setSelectedExercise}
          />
        ))}
      </div>

      <ExerciseModal
        exercise={selectedExercise}
        isOpen={!!selectedExercise}
        onClose={() => setSelectedExercise(null)}
      />
    </div>
  )
}
