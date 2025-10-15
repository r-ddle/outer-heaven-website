import { CodecHeader } from "@/components/codec-header"
import { Navigation } from "@/components/navigation"
import { CodecSection } from "@/components/codec-section"
import { TerminalText } from "@/components/terminal-text"
import Link from "next/link"
import { JoinButton } from "@/components/join-button"
import { getSiteConfig, SiteConfig } from "@/types/site-config"

export default async function Home() {
  const config: SiteConfig = await getSiteConfig();
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <CodecHeader />
        <Navigation />

        {/* Hero Section */}
        <div className="codec-frame p-8 md:p-12 bg-card/30 text-center">
          <div className="corner-bl"></div>
          <div className="corner-br"></div>

          <div className="space-y-6">
            <div>
              <div
                className="text-accent text-2xl md:text-4xl font-bold mb-3"
                style={{ fontFamily: "HeaderFont" }}
              >
                WELCOME TO THE BASE
              </div>
              <div className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
                A tactical gaming community for soldiers who appreciate the art of stealth, strategy, and the legendary
                Metal Gear Solid franchise.
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <JoinButton />
            </div>
          </div>
        </div>

        {/* Server Screenshots Grid */}
        <CodecSection title="SERVER OVERVIEW">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="screenshot-hover overflow-hidden">
              <img
                src="/channels.jpg?height=400&width=600"
                alt="Server Channels"
                className="w-full h-80 object-cover"
              />
              <div className="p-4 bg-card/80">
                <div className="text-primary font-bold mb-1">ORGANIZED CHANNELS</div>
                <div className="text-sm text-muted-foreground">
                  Dedicated spaces for gaming, lore discussions, and community events
                </div>
              </div>
            </div>

            <div className="screenshot-hover overflow-hidden">
              <img
                src="/community.jpg?height=400&width=600"
                alt="Active Community"
                className="w-full h-80 object-cover"
              />
              <div className="p-4 bg-card/80">
                <div className="text-primary font-bold mb-1">ACTIVE COMMUNITY</div>
                <div className="text-sm text-muted-foreground">
                  Friendly members discussing tactics, sharing gameplay, and having fun
                </div>
              </div>
            </div>

            <div className="screenshot-hover overflow-hidden">
              <img
                src="/vc.webp?height=400&width=600"
                alt="Voice Channels"
                className="w-full h-80 object-cover"
              />
              <div className="p-4 bg-card/80">
                <div className="text-primary font-bold mb-1">VOICE OPERATIONS</div>
                <div className="text-sm text-muted-foreground">
                  Co-op missions and game nights with fellow operatives
                </div>
              </div>
            </div>

            <div className="screenshot-hover overflow-hidden">
              <img
                src="/ranking.png?height=400&width=600"
                alt="Custom Roles"
                className="w-full h-80 object-cover"
              />
              <div className="p-4 bg-card/80">
                <div className="text-primary font-bold mb-1">RANK SYSTEM</div>
                <div className="text-sm text-muted-foreground">
                  Earn XP and unlock special roles as you participate in the community
                </div>
              </div>
            </div>
          </div>
        </CodecSection>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center">
          <div className="codec-frame p-6 bg-card/30 text-center">
            <div className="corner-bl"></div>
            <div className="corner-br"></div>
            <div className="text-3xl font-bold text-primary mb-2">{config.activeMembers}</div>
            <div className="text-sm text-muted-foreground">ACTIVE MEMBERS</div>
          </div>

          <div className="codec-frame p-6 bg-card/30 text-center">
            <div className="corner-bl"></div>
            <div className="corner-br"></div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">ONLINE PRESENCE</div>
          </div>

          <div className="codec-frame p-6 bg-card/30 text-center">
            <div className="corner-bl"></div>
            <div className="corner-br"></div>
            <div className="text-3xl font-bold text-primary mb-2">Chatting</div>
            <div className="text-sm text-muted-foreground">WEEKLY EVENTS</div>
          </div>
        </div>

        {/* What We Offer */}
        <CodecSection title="WHAT WE OFFER">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="feature-card p-6">
              <div className="text-accent text-xl font-bold mb-3">GAMING SESSIONS</div>
              <TerminalText>
                Regular co-op missions, competitive matches, and game streaming
              </TerminalText>
            </div>

            <div className="feature-card p-6">
              <div className="text-accent text-xl font-bold mb-3">LORE DISCUSSIONS</div>
              <TerminalText>Deep dives into Metal Gear lore, theories, and analysis with passionate fans</TerminalText>
            </div>

            <div className="feature-card p-6">
              <div className="text-accent text-xl font-bold mb-3">CUSTOM BOT</div>
              <TerminalText>MGS-themed Discord bot with XP system, ranks, and interactive features</TerminalText>
            </div>

            <div className="feature-card p-6">
              <div className="text-accent text-xl font-bold mb-3">DEV COMMUNITY</div>
              <TerminalText>Dedicated channels for game developers and modders to share projects</TerminalText>
            </div>

            <div className="feature-card p-6">
              <div className="text-accent text-xl font-bold mb-3">FRIENDLY VIBES</div>
              <TerminalText>Welcoming atmosphere for veterans and newcomers alike</TerminalText>
            </div>
          </div>
        </CodecSection>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground py-6 border-t border-border/30">
          <div className="mb-2">
            <span className="blink">{">"}</span> OUTER HEAVEN: EXILED UNITS <span className="blink">{"<"}</span>
          </div>
          <div className="text-xs">A Gaming Community • Not affiliated with Konami</div>
        </div>
      </div>
    </main>
  )
}
