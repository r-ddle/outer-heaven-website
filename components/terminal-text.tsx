import type React from "react"
interface TerminalTextProps {
  children: React.ReactNode
}

export function TerminalText({ children }: TerminalTextProps) {
  return <div className="text-foreground leading-relaxed">{children}</div>
}
