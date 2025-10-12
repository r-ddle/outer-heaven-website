export function CodecHeader() {
  return (
    <div className="codec-frame p-6 md:p-8 bg-card/50 relative">
      <div className="corner-bl"></div>
      <div className="corner-br"></div>

      <div className="space-y-4">
        {/* Title */}
        <div className="text-center">
          <div
            className="text-accent text-3xl md:text-5xl lg:text-6xl font-black mb-3 tracking-wider"
            style={{ fontFamily: "'HeaderFont', sans-serif" }}
          >
            OUTER HEAVEN
          </div>
          <div className="text-primary italic text-xl font-black  md:text-2xl tracking-[1em]">
            EXILED UNITS
          </div>
        </div>

        {/* Frequency Display */}
        <div className="flex items-center justify-center gap-4 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-muted-foreground">FREQUENCY:</span>
            <span className="text-primary font-bold">140.85</span>
          </div>
          <div className="text-muted-foreground">|</div>
          <div className="text-muted-foreground">
            STATUS: <span className="text-primary">ONLINE</span>
          </div>
        </div>
      </div>
    </div>
  )
}
