"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useAuth } from "./AuthProvider"

type ProgressData = {
  completed_days: number[];
  current_day: number;
  streak: number;
  best_streak: number;
  total_minutes: number;
  total_workouts: number;
}

const defaultProgress: ProgressData = {
  completed_days: [],
  current_day: 1,
  streak: 0,
  best_streak: 0,
  total_minutes: 0,
  total_workouts: 0
}

type ProgressContextType = {
  progress: ProgressData;
  loading: boolean;
  markCompleted: (day: number, minutes: number) => Promise<void>;
}

const ProgressContext = createContext<ProgressContextType>({
  progress: defaultProgress,
  loading: true,
  markCompleted: async () => {}
})

export const useProgress = () => useContext(ProgressContext)

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const [progress, setProgress] = useState<ProgressData>(defaultProgress)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setProgress(defaultProgress)
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(false)
      return
    }

    const fetchProgress = async () => {
      setLoading(true)
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .single();
      
      if (data && !error) {
        setProgress({
          completed_days: data.completed_days || [],
          current_day: data.current_day || 1,
          streak: data.streak || 0,
          best_streak: data.best_streak || 0,
          total_minutes: data.total_minutes || 0,
          total_workouts: data.total_workouts || 0,
        })
      } else if (error && error.code === 'PGRST116') {
        // Not found, that's fine, we will use default
        setProgress(defaultProgress)
      }
      setLoading(false)
    }

    fetchProgress()
  }, [user])

  const markCompleted = async (day: number, minutes: number) => {
    if (!user) return;
    
    if (progress.completed_days.includes(day)) return; // already completed

    const newCompletedDays = [...progress.completed_days, day];
    const newTotalMinutes = progress.total_minutes + minutes;
    const newTotalWorkouts = progress.total_workouts + 1;
    const newStreak = progress.streak + 1;
    const newBestStreak = Math.max(progress.best_streak, newStreak);
    const newCurrentDay = Math.max(progress.current_day, Math.min(day + 1, 21));

    const newProgress = {
      completed_days: newCompletedDays,
      current_day: newCurrentDay,
      streak: newStreak,
      best_streak: newBestStreak,
      total_minutes: newTotalMinutes,
      total_workouts: newTotalWorkouts,
    };

    // Optimistic update
    setProgress(newProgress);

    // Try to update Supabase
    const { error } = await supabase.from('user_progress').upsert({
      user_id: user.id,
      ...newProgress,
      last_workout_date: new Date().toISOString().split('T')[0]
    }, { onConflict: 'user_id' });
    
    if (error) {
      console.error("Erro ao salvar progresso:", error);
      alert("Erro ao salvar no banco de dados. Verifique o console ou as políticas RLS no Supabase.");
    }
  }

  return (
    <ProgressContext.Provider value={{ progress, loading, markCompleted }}>
      {children}
    </ProgressContext.Provider>
  )
}
