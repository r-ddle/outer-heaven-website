import type React from "react"
interface CodecSectionProps {
  title: string
  children: React.ReactNode
}

export function CodecSection({ title, children }: CodecSectionProps) {
  return (
    <div className="codec-frame p-6 md:p-8 bg-card/30 relative">
      <div className="corner-bl"></div>
      <div className="corner-br"></div>

      <div className="space-y-4">
        {/* Section Header */}
        <div className="border-b-2 border-primary pb-2 mb-4">
          <div className="flex items-center gap-2">
            <h2
              className="text-accent text-xl md:text-2xl font-bold tracking-wider"
              style={{ fontFamily: "HeaderFont" }}
            >
              {title}
            </h2>
          </div>
        </div>

        {/* Content */}
        {children}
      </div>
    </div>
  )
}
