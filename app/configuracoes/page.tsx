"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, Moon, User, Shield, CircleHelp, LogOut } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function ConfiguracoesPage() {
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/login")
  }

  const sections = [
    {
      title: "Conta",
      items: [
        { icon: User, label: "Perfil", value: "aluna@exemplo.com" },
        { icon: Shield, label: "Privacidade e Segurança", value: "" },
      ]
    },
    {
      title: "Preferências",
      items: [
        { icon: Bell, label: "Notificações", value: "Ativado" },
        { icon: Moon, label: "Tema Escuro", value: "Desativado" },
      ]
    },
    {
      title: "Suporte",
      items: [
        { icon: CircleHelp, label: "Central de Ajuda", value: "" },
      ]
    }
  ]

  return (
    <div className="mx-auto max-w-2xl p-6 sm:p-10 space-y-8 animate-in fade-in duration-500">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-[#111111]">
          Configurações
        </h1>
        <p className="text-[#666666]">
          Ajuste suas preferências e dados da conta.
        </p>
      </header>

      <div className="space-y-6">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <h3 className="text-sm font-bold text-[#111111] uppercase tracking-wider ml-1">
              {section.title}
            </h3>
            <Card className="bg-white overflow-hidden shadow-sm border border-gray-100 rounded-3xl">
              <div className="flex flex-col divide-y divide-gray-100">
                {section.items.map((item, itemIdx) => {
                  const Icon = item.icon
                  return (
                    <div 
                      key={itemIdx} 
                      className="flex items-center justify-between p-5 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 rounded-lg text-[#666666]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="font-bold text-[#111111]">{item.label}</span>
                      </div>
                      {item.value && (
                        <span className="text-sm font-medium text-[#666666]">{item.value}</span>
                      )}
                    </div>
                  )
                })}
              </div>
            </Card>
          </div>
        ))}

        <div className="pt-4">
          <Button onClick={handleLogout} variant="ghost" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50 gap-2 h-14 rounded-2xl font-bold">
            <LogOut className="h-5 w-5" />
            Sair da conta
          </Button>
        </div>
      </div>
    </div>
  )
}
