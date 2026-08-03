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
  last_workout_date?: string | null;
}

const defaultProgress: ProgressData = {
  completed_days: [],
  current_day: 1,
  streak: 0,
  best_streak: 0,
  total_minutes: 0,
  total_workouts: 0,
  last_workout_date: null
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
      setProgress(defaultProgress)
      setLoading(false)
      return
    }

    const fetchProgress = async () => {
      setLoading(true)
      
      const local = localStorage.getItem(`progress_${user.id}`)
      let localData = null;
      if (local) {
        try {
          localData = JSON.parse(local)
        } catch(e) {}
      }

      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .single();
      
      if (data && !error) {
        const serverData = {
          completed_days: data.completed_days || [],
          current_day: data.current_day || 1,
          streak: data.streak || 0,
          best_streak: data.best_streak || 0,
          total_minutes: data.total_minutes || 0,
          total_workouts: data.total_workouts || 0,
          last_workout_date: data.last_workout_date || null,
        }
        if (localData && localData.completed_days?.length > serverData.completed_days?.length) {
          setProgress(localData);
        } else {
          setProgress(serverData)
          localStorage.setItem(`progress_${user.id}`, JSON.stringify(serverData))
        }
      } else {
        if (localData) {
          setProgress(localData)
        } else {
          setProgress(defaultProgress)
        }
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

    const today = new Date().toLocaleDateString('en-CA');
    const newProgress = {
      completed_days: newCompletedDays,
      current_day: newCurrentDay,
      streak: newStreak,
      best_streak: newBestStreak,
      total_minutes: newTotalMinutes,
      total_workouts: newTotalWorkouts,
      last_workout_date: today
    };

    // Optimistic update
    setProgress(newProgress);
    localStorage.setItem(`progress_${user.id}`, JSON.stringify(newProgress));

    // Try to update Supabase
    const { error } = await supabase.from('user_progress').upsert({
      user_id: user.id,
      ...newProgress,
    }, { onConflict: 'user_id' });
    
    if (error) {
      console.warn("Aviso: Falha no Supabase. Usando Local Storage como fallback. Erro:", error);
    }
  }

  return (
    <ProgressContext.Provider value={{ progress, loading, markCompleted }}>
      {children}
    </ProgressContext.Provider>
  )
}
