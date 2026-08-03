"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function LoginPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const router = useRouter()

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name: name,
            }
          }
        })
        if (error) throw error
        alert("Conta criada! Você já pode fazer login.")
        setIsSignUp(false)
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
        router.push("/")
        router.refresh()
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] p-4">
      <Card className="w-full max-w-md bg-white border border-gray-100 shadow-xl rounded-3xl p-6 sm:p-8">
        <CardHeader className="px-0 pt-0 pb-6 text-center">
          <CardTitle className="text-2xl font-bold text-[#111111]">
            Método Glúteo <span className="text-[#8B5CF6]">3D</span>
          </CardTitle>
          <CardDescription className="text-[#666666]">
            {isSignUp ? "Crie sua conta para começar" : "Faça login para acessar seus treinos"}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <form onSubmit={handleAuth} className="space-y-4">
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-[#111111] mb-1">Nome Completo</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all"
                  placeholder="Seu nome"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-[#111111] mb-1">E-mail</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#111111] mb-1">Senha</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all"
                placeholder="••••••••"
              />
            </div>
            
            {error && (
              <div className="text-red-500 text-sm font-medium p-3 bg-red-50 rounded-xl border border-red-100">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full h-12 rounded-xl text-base font-bold shadow-md hover:shadow-lg transition-all" disabled={loading}>
              {loading ? "Aguarde..." : (isSignUp ? "Criar Conta" : "Entrar")}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button 
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-sm font-bold text-[#8B5CF6] hover:text-[#7c4ce4] transition-colors"
            >
              {isSignUp ? "Já tem uma conta? Fazer login" : "Não tem conta? Criar uma"}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
