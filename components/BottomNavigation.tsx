"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Calendar, Library, TrendingUp, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/rotina", icon: Calendar, label: "21 Dias" },
  { href: "/biblioteca", icon: Library, label: "Exercícios" },
  { href: "/progresso", icon: TrendingUp, label: "Progresso" },
  { href: "/configuracoes", icon: Settings, label: "Ajustes" },
]

export function BottomNavigation() {
  const pathname = usePathname()

  if (pathname === "/login") return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-20 items-center justify-around border-t border-gray-100 bg-white/80 pb-safe backdrop-blur-lg sm:hidden">
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center space-y-1 w-16 h-full transition-colors",
              isActive ? "text-[#8B5CF6]" : "text-gray-400 hover:text-[#111111]"
            )}
          >
            <Icon className="h-6 w-6" strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
