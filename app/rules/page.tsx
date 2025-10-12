import { CodecHeader } from "@/components/codec-header"
import { Navigation } from "@/components/navigation"
import { CodecSection } from "@/components/codec-section"
import { TerminalText } from "@/components/terminal-text"

export default function RulesPage() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <CodecHeader />
        <Navigation />

        {/* Rules Header */}
        <div className="codec-frame p-8 bg-card/30 text-center">
          <div className="corner-bl"></div>
          <div className="corner-br"></div>

          <div
            className="text-accent text-3xl md:text-4xl font-bold mb-3"
            style={{ fontFamily: "HeaderFont" }}
          >
            RULES OF ENGAGEMENT
          </div>
          <div className="text-muted-foreground">{">"} Follow these guidelines to maintain operational integrity</div>
        </div>

        {/* What is this Server */}
        <CodecSection title="WHAT IS THIS SERVER?">
          <TerminalText>
            <div className="space-y-4">
              <div className="bg-card/50 p-6 border-l-4 border-primary">
                <div className="text-foreground leading-relaxed">
                  This server was started by a group of Metal Gear fans who split off from another community and decided
                  to build something of our own. We wanted a place that actually feels like a small base. Relaxed,
                  focused on the series, and run by people who actually play and enjoy Metal Gear.
                </div>
              </div>

              <div className="bg-card/50 p-6 border-l-4 border-accent">
                <div className="text-foreground leading-relaxed">
                  We keep it simple: talk MGS, share memes, argue about lore, and take part in small mission-style
                  events when they drop. Think of this place like a personal Mother Base, just a hangout for people who
                  get the series.
                </div>
              </div>
            </div>
          </TerminalText>
        </CodecSection>

        {/* Server Rules */}
        <CodecSection title="SERVER RULES">
          <TerminalText>
            <div className="space-y-6">
              <div className="feature-card p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-accent font-bold">01</div>
                  <div className="flex-1">
                    <div className="text-primary text-xl font-bold mb-2">CLASSIFIED MATTERS</div>
                    <div className="text-foreground leading-relaxed">
                      We don't talk about the <em>Incident</em>. It stays off-record.
                    </div>
                  </div>
                </div>
              </div>

              <div className="feature-card p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-accent font-bold">02</div>
                  <div className="flex-1">
                    <div className="text-primary text-xl font-bold mb-2">RESPECT THE BASE</div>
                    <div className="text-foreground leading-relaxed">
                      Jokes are fine, harassment isn't. Don't drag personal attacks, slurs, or weird obsessions into
                      conversations. Know the limit.
                    </div>
                  </div>
                </div>
              </div>

              <div className="feature-card p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-accent font-bold">03</div>
                  <div className="flex-1">
                    <div className="text-primary text-xl font-bold mb-2">STAY ON TOPIC</div>
                    <div className="text-foreground leading-relaxed">
                      This is an MGS server first. Off-topic chat is allowed, but keep the main channels focused on Metal
                      Gear content. We don't allow politics and fights - take them to DMs and sort it out.
                    </div>
                  </div>
                </div>
              </div>

              <div className="feature-card p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-accent font-bold">04</div>
                  <div className="flex-1">
                    <div className="text-primary text-xl font-bold mb-2">NO SPAM OR FLOODING COMMS</div>
                    <div className="text-foreground leading-relaxed">
                      Spamming any sort of media, including emotes and reactions, are prohibited. Also includes pinging
                      people without a good reason and excessive posting in channels.
                    </div>
                  </div>
                </div>
              </div>

              <div className="feature-card p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-accent font-bold">05</div>
                  <div className="flex-1">
                    <div className="text-primary text-xl font-bold mb-2">NO NSFW / DISTURBING CONTENT</div>
                    <div className="text-foreground leading-relaxed">
                      While the Metal Gear franchise is rated for mature audiences, this server does not allow NSFW, NSFL
                      or gore content of any kind. Flirting, e-dating or weird fanfics of MGS content is not allowed.
                      Minors exist in the server and we have zero tolerance for that behavior. If you would not show it
                      to your family, do not post it here.
                    </div>
                  </div>
                </div>
              </div>

              <div className="feature-card p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-accent font-bold">06</div>
                  <div className="flex-1">
                    <div className="text-primary text-xl font-bold mb-2">LEARN TO READ THE ROOM</div>
                    <div className="text-foreground leading-relaxed">
                      MGS is all about memes and humor, but if multiple people are clearly not into the things you are
                      sending, drop it. Don't force it.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TerminalText>
        </CodecSection>

        {/* Consequences */}
        <CodecSection title="ENFORCEMENT">
          <TerminalText>
            <div className="space-y-4">
              <div className="bg-card/50 p-4 border-l-4 border-accent">
                <div className="text-accent font-bold mb-2">WARNING SYSTEM</div>
                <div className="text-foreground">
                  Minor violations result in warnings. Accumulating warnings may lead to temporary restrictions or
                  mutes.
                </div>
              </div>

              <div className="bg-card/50 p-4 border-l-4 border-primary">
                <div className="text-primary font-bold mb-2">TEMPORARY BANS</div>
                <div className="text-foreground">
                  Serious violations or repeated offenses result in temporary bans ranging from 24 hours to 30 days.
                </div>
              </div>

              <div className="bg-card/50 p-4 border-l-4 border-destructive">
                <div className="text-destructive font-bold mb-2">PERMANENT BANS</div>
                <div className="text-foreground">
                  Severe violations (harassment, hate speech, illegal content) result in immediate permanent removal.
                </div>
              </div>
            </div>
          </TerminalText>
        </CodecSection>

        {/* Consequences */}
        <CodecSection title="ENFORCEMENT">
          <TerminalText>
            <div className="space-y-4">
              <div className="bg-card/50 p-4 border-l-4 border-accent">
                <div className="text-accent font-bold mb-2">WARNING SYSTEM</div>
                <div className="text-foreground">
                  Minor violations result in warnings. Accumulating warnings may lead to temporary restrictions or mutes.
                </div>
              </div>

              <div className="bg-card/50 p-4 border-l-4 border-primary">
                <div className="text-primary font-bold mb-2">TEMPORARY BANS</div>
                <div className="text-foreground">
                  Serious violations or repeated offenses result in temporary bans ranging from 24 hours to 30 days.
                </div>
              </div>

              <div className="bg-card/50 p-4 border-l-4 border-destructive">
                <div className="text-destructive font-bold mb-2">PERMANENT BANS</div>
                <div className="text-foreground">
                  Severe violations (harassment, hate speech, illegal content) result in immediate permanent removal.
                </div>
              </div>
            </div>
          </TerminalText>
        </CodecSection>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground py-6 border-t border-border/30">
          <div className="mb-2">
            {">"} RULES LAST UPDATED: 2025-01-15 <span className="blink">_</span>
          </div>
          <div className="text-xs">Questions? Contact a moderator</div>
        </div>
      </div>
    </main>
  )
}
