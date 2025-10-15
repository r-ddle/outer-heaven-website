import { CodecHeader } from "@/components/codec-header"
import { Navigation } from "@/components/navigation"
import { CodecSection } from "@/components/codec-section"
import { JoinButton } from "@/components/join-button"
import { getSiteConfig, SiteConfig } from "@/types/site-config"

export default async function JoinPage() {
  const config: SiteConfig = await getSiteConfig();
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <CodecHeader />
        <Navigation />

        {/* Join CTA */}
        <div className="codec-frame p-12 md:p-16 text-center bg-card/30">
          <div className="corner-bl"></div>
          <div className="corner-br"></div>

          <div className="space-y-8">
            <div>
              <div
                className="text-accent text-4xl md:text-6xl font-bold mb-4 tracking-wider"
                style={{ fontFamily: "HeaderFont" }}
              >
                READY TO DEPLOY?
              </div>
              <div className="text-xl md:text-2xl text-foreground mb-6">Join Outer Heaven: Exiled Units on Discord</div>
              <div className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Whether you're a veteran of Shadow Moses or a rookie fresh from boot camp, you'll find your place
                among our ranks. Join {Math.floor(config.activeMembers / 10) * 10}+ operatives in tactical gaming, lore discussions, and community events.
              </div>
            </div>

            <JoinButton />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{Math.floor(config.activeMembers / 10) * 10}+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Online Community</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Random</div>
                <div className="text-sm text-muted-foreground">Weekly Events</div>
              </div>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <CodecSection title="WHAT TO EXPECT">
          <div className="space-y-4">

            <div className="feature-card p-6">
              <div className="text-primary text-xl font-bold mb-3">01. INTRODUCE YOURSELF</div>
              <div className="text-foreground leading-relaxed">
                Head to the introductions channel and tell us about yourself. What MGS games have you played? What other
                games do you enjoy?
              </div>
            </div>

            <div className="feature-card p-6">
              <div className="text-primary text-xl font-bold mb-3">02. EXPLORE CHANNELS</div>
              <div className="text-foreground leading-relaxed">
                Browse our organized channels for gaming, lore discussions, development, and off-topic conversations.
                Find your favorite spots!
              </div>
            </div>

            <div className="feature-card p-6">
              <div className="text-primary text-xl font-bold mb-3">03. START EARNING XP</div>
              <div className="text-foreground leading-relaxed">
                Participate in conversations and events to earn XP. Level up through military ranks and unlock special
                roles and perks.
              </div>
            </div>

            <div className="feature-card p-6">
              <div className="text-primary text-xl font-bold mb-3">04. JOIN EVENTS</div>
              <div className="text-foreground leading-relaxed">
                Check the events calendar and join game nights, lore discussions, speedrun challenges, and more. Make
                friends and have fun!
              </div>
            </div>
          </div>
        </CodecSection>

        {/* Contact Info */}
        <div className="codec-frame p-8 bg-card/30">
          <div className="corner-bl"></div>
          <div className="corner-br"></div>

          <div className="text-center space-y-4">
            <div className="text-xl font-bold text-primary mb-4">NEED HELP?</div>
            <div className="text-muted-foreground">
              If you have questions or issues joining, contact our moderators on Discord or check our FAQ channel after
              joining.
            </div>
            <div className="pt-4 border-t border-border/30 mt-6">
              <div className="text-sm text-muted-foreground mb-2">FREQUENCY: <a href={config.discordInviteUrl} target="_blank">https://discord.gg/outerheaven</a></div>
              <div className="flex items-center justify-center gap-2">
                <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-primary">TRANSMISSION ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground py-6 border-t border-border/30">
          <div className="mb-2">
            {">"} SEE YOU ON THE BATTLEFIELD, SOLDIER <span className="blink">_</span>
          </div>
          <div className="text-xs">A Metal Gear Solid fan community • Not affiliated with Konami</div>
        </div>
      </div>
    </main>
  )
}
