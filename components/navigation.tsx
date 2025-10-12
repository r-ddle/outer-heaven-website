"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "HOME" },
    { href: "/bot", label: "BOT FEATURES" },
    { href: "/rules", label: "RULES" },
    { href: "/events", label: "EVENTS" },
    { href: "/join", label: "JOIN US" },
  ]

  return (
    <nav className="codec-frame p-4 bg-card/50 mb-6">
      <div className="corner-bl"></div>
      <div className="corner-br"></div>

      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
        {links.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 border-2 transition-colors font-bold text-sm md:text-base ${
                isActive
                  ? "border-primary bg-primary/20 text-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
