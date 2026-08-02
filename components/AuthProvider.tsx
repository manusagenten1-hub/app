"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter, usePathname } from "next/navigation"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      setLoading(false)
      
      if (!session?.user && pathname !== "/login") {
        router.push("/login")
      } else if (session?.user && pathname === "/login") {
        router.push("/")
      }
    }

    checkUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      if (!session?.user && pathname !== "/login") {
        router.push("/login")
      } else if (session?.user && pathname === "/login") {
        router.push("/")
      }
    })

    return () => subscription.unsubscribe()
  }, [pathname, router])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">Carregando...</div>
  }

  // Se estiver na tela de login, não mostra os menus
  if (pathname === "/login") {
    return <>{children}</>
  }

  return <>{children}</>
}
