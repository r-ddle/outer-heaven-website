"use client"

export function JoinButton() {
  return (
    <button
      onClick={() => {
        // Replace with your actual Discord invite link
        window.open("https://discord.gg/eDkGBu3524", "_blank")
      }}
      className="group relative px-8 py-4 bg-primary text-primary-foreground font-bold text-lg tracking-wider transition-all hover:bg-accent hover:text-accent-foreground border-2 border-primary hover:border-accent"
      style={{ fontFamily: "var(--font-orbitron)" }}
    >
      <span className="relative z-10">{">> JOIN DISCORD <<"}</span>

      {/* Animated corner brackets on hover */}
      <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-background transition-all group-hover:w-6 group-hover:h-6"></span>
      <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-background transition-all group-hover:w-6 group-hover:h-6"></span>
      <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-background transition-all group-hover:w-6 group-hover:h-6"></span>
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-background transition-all group-hover:w-6 group-hover:h-6"></span>
    </button>
  )
}
