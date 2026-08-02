"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Calendar, Library, TrendingUp, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/rotina", icon: Calendar, label: "Rotina dos 21 Dias" },
  { href: "/biblioteca", icon: Library, label: "Biblioteca" },
  { href: "/progresso", icon: TrendingUp, label: "Progresso" },
  { href: "/configuracoes", icon: Settings, label: "Configurações" },
]

export function Sidebar() {
  const pathname = usePathname()

  if (pathname === "/login") return null;

  return (
    <aside className="hidden w-64 flex-col border-r border-gray-100 bg-white sm:flex h-screen sticky top-0">
      <div className="flex h-20 items-center px-8 border-b border-gray-100">
        <h1 className="text-xl font-bold tracking-tight text-[#111111]">
          Método Glúteo <span className="text-[#8B5CF6]">3D</span>
        </h1>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 rounded-xl px-4 py-3 text-sm font-bold transition-all",
                isActive
                  ? "bg-[#8B5CF6] text-white shadow-lg shadow-purple-200"
                  : "text-[#666666] hover:bg-gray-50 hover:text-[#111111]"
              )}
            >
              <Icon className="h-5 w-5" strokeWidth={isActive ? 2.5 : 2} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
