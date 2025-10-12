import { CodecHeader } from "@/components/codec-header"
import { Navigation } from "@/components/navigation"
import { CodecSection } from "@/components/codec-section"
import { TerminalText } from "@/components/terminal-text"

export default function BotPage() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <CodecHeader />
        <Navigation />

        {/* Bot Hero */}
        <div className="codec-frame p-8 md:p-12 bg-card/30">
          <div className="corner-bl"></div>
          <div className="corner-br"></div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div
                className="text-accent text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "HeaderFont" }}
              >
                CODEC BOT
              </div>
              <div className="text-lg text-foreground leading-relaxed mb-6">
                Our custom Metal Gear Solid-themed Discord bot brings the tactical espionage experience to your server
                with XP tracking, rank progression, and interactive commands.
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">STATUS:</span>
                <span className="text-primary font-bold">OPERATIONAL</span>
              </div>
            </div>

            <div className="screenshot-hover overflow-hidden">
              <img
                src="/bot.png?height=600&width=600"
                alt="Codec Bot Interface"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bot Screenshots */}
        <CodecSection title="BOT IN ACTION">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="screenshot-hover overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uqcmWCvbkF8tW5ojvEhZEQpkfm922q.png"
                alt="Promotion System"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-card/80">
                <div className="text-primary font-bold mb-1">RANK PROMOTIONS</div>
                <div className="text-sm text-muted-foreground">
                  Earn XP and climb the ranks with beautiful promotion notifications
                </div>
              </div>
            </div>

            <div className="screenshot-hover overflow-hidden">
              <img
                src="/dailydrop.png?height=400&width=600"
                alt="Bot Commands"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-card/80">
                <div className="text-primary font-bold mb-1">DAILY SUPPLY</div>
                <div className="text-sm text-muted-foreground">
                    Claim daily rewards to boost your XP and rank up faster
                </div>
              </div>
            </div>

            <div className="screenshot-hover overflow-hidden">
              <img
                src="/leaderboard.png?height=400&width=600"
                alt="Leaderboards"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-card/80">
                <div className="text-primary font-bold mb-1">LEADERBOARDS</div>
                <div className="text-sm text-muted-foreground">
                  Compete with other operatives for the top spot on the rankings
                </div>
              </div>
            </div>
          </div>
        </CodecSection>

        {/* Features Grid */}
        <CodecSection title="CORE FEATURES">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="feature-card p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-primary">01</div>
                <div className="flex-1">
                  <div className="text-accent text-xl font-bold mb-2">XP & LEVELING SYSTEM</div>
                  <TerminalText>
                    Earn experience points through server activity. Level up to unlock new ranks and special roles.
                    Track your progress with detailed stats.
                  </TerminalText>
                </div>
              </div>
            </div>

            <div className="feature-card p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-primary">02</div>
                <div className="flex-1">
                  <div className="text-accent text-xl font-bold mb-2">MILITARY RANKS</div>
                  <TerminalText>
                    Progress through authentic military ranks from Recruit to Big Boss. Each promotion comes with
                    exclusive perks and recognition.
                  </TerminalText>
                </div>
              </div>
            </div>

            <div className="feature-card p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-primary">03</div>
                <div className="flex-1">
                  <div className="text-accent text-xl font-bold mb-2">CODEC NOTIFICATIONS</div>
                  <TerminalText>
                    Beautiful MGS-themed notifications for promotions, achievements, and special events. Fully
                    customized codec screen aesthetic.
                  </TerminalText>
                </div>
              </div>
            </div>

            <div className="feature-card p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-primary">04</div>
                <div className="flex-1">
                  <div className="text-accent text-xl font-bold mb-2">LEADERBOARDS</div>
                  <TerminalText>
                    Real-time leaderboards showing top operatives by XP, activity, and achievements. Compete for the
                    number one spot.
                  </TerminalText>
                </div>
              </div>
            </div>

            <div className="feature-card p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-primary">05</div>
                <div className="flex-1">
                  <div className="text-accent text-xl font-bold mb-2">PROFILE CARDS</div>
                  <TerminalText>
                    View detailed profile cards showing rank, XP, join date, and achievements. Customize your soldier
                    profile.
                  </TerminalText>
                </div>
              </div>
            </div>

            <div className="feature-card p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-primary">06</div>
                <div className="flex-1">
                  <div className="text-accent text-xl font-bold mb-2">INTERACTIVE COMMANDS</div>
                  <TerminalText>
                    Fun MGS-themed commands including codec calls, mission briefings, and tactical quotes from the
                    series.
                  </TerminalText>
                </div>
              </div>
            </div>
          </div>
        </CodecSection>

        {/* Command List */}
        <CodecSection title="AVAILABLE COMMANDS">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-4 border-primary pl-4 py-2">
              <div className="text-primary font-bold mb-1">!status</div>
              <div className="text-sm text-muted-foreground">Check your rank, XP, and progression stats</div>
            </div>

            <div className="border-l-4 border-primary pl-4 py-2">
              <div className="text-primary font-bold mb-1">!rank [@user]</div>
              <div className="text-sm text-muted-foreground">View detailed rank card with statistics</div>
            </div>

            <div className="border-l-4 border-primary pl-4 py-2">
              <div className="text-primary font-bold mb-1">!daily</div>
              <div className="text-sm text-muted-foreground">Claim daily XP bonus with streak tracking</div>
            </div>

            <div className="border-l-4 border-primary pl-4 py-2">
              <div className="text-primary font-bold mb-1">!leaderboard [category]</div>
              <div className="text-sm text-muted-foreground">View rankings (xp, tactical, messages)</div>
            </div>

            <div className="border-l-4 border-primary pl-4 py-2">
              <div className="text-primary font-bold mb-1">!profile [@user]</div>
              <div className="text-sm text-muted-foreground">View member profile card</div>
            </div>

            <div className="border-l-4 border-primary pl-4 py-2">
              <div className="text-primary font-bold mb-1">!setbio &lt;text&gt;</div>
              <div className="text-sm text-muted-foreground">Set your profile bio (150 char limit)</div>
            </div>

            <div className="border-l-4 border-primary pl-4 py-2">
              <div className="text-primary font-bold mb-1">!tactical_test &lt;message&gt;</div>
              <div className="text-sm text-muted-foreground">Test tactical word detection</div>
            </div>

            <div className="border-l-4 border-primary pl-4 py-2">
              <div className="text-primary font-bold mb-1">!help</div>
              <div className="text-sm text-muted-foreground">Complete command manual</div>
            </div>

            <div className="border-l-4 border-primary pl-4 py-2">
              <div className="text-primary font-bold mb-1">!wordup_status</div>
              <div className="text-sm text-muted-foreground">Check Word-Up game status</div>
            </div>

            <div className="border-l-4 border-primary pl-4 py-2">
              <div className="text-primary font-bold mb-1">/ping</div>
              <div className="text-sm text-muted-foreground">Test bot connection and response time</div>
            </div>
          </div>
        </CodecSection>

        {/* Rank System */}
        <CodecSection title="RANK PROGRESSION">
          <div className="space-y-4">
            <TerminalText>
              <div className="mb-6">
                Progress through military ranks by earning XP. Monthly XP resets on the 1st, but ranks and multipliers
                are preserved!
              </div>
            </TerminalText>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card/50 p-4 border-l-4 border-primary">
                <div className="text-primary font-bold mb-2">ROOKIE</div>
                <div className="text-sm text-muted-foreground">Starting rank - 0 XP required</div>
              </div>

              <div className="bg-card/50 p-4 border-l-4 border-primary">
                <div className="text-primary font-bold mb-2">PRIVATE</div>
                <div className="text-sm text-muted-foreground">100 XP required</div>
              </div>

              <div className="bg-card/50 p-4 border-l-4 border-primary">
                <div className="text-primary font-bold mb-2">SPECIALIST</div>
                <div className="text-sm text-muted-foreground">500 XP required</div>
              </div>

              <div className="bg-card/50 p-4 border-l-4 border-primary">
                <div className="text-primary font-bold mb-2">CORPORAL</div>
                <div className="text-sm text-muted-foreground">1,000 XP required</div>
              </div>

              <div className="bg-card/50 p-4 border-l-4 border-primary">
                <div className="text-primary font-bold mb-2">SERGEANT</div>
                <div className="text-sm text-muted-foreground">1,800 XP required</div>
              </div>

              <div className="bg-card/50 p-4 border-l-4 border-primary">
                <div className="text-primary font-bold mb-2">LIEUTENANT</div>
                <div className="text-sm text-muted-foreground">3,000 XP required</div>
              </div>

              <div className="bg-card/50 p-4 border-l-4 border-accent">
                <div className="text-accent font-bold mb-2">CAPTAIN</div>
                <div className="text-sm text-muted-foreground">5,000 XP required</div>
              </div>

              <div className="bg-card/50 p-4 border-l-4 border-accent">
                <div className="text-accent font-bold mb-2">MAJOR</div>
                <div className="text-sm text-muted-foreground">8,000 XP required</div>
              </div>

              <div className="bg-card/50 p-4 border-l-4 border-accent">
                <div className="text-accent font-bold mb-2">COLONEL</div>
                <div className="text-sm text-muted-foreground">12,000 XP required</div>
              </div>

              <div className="bg-card/50 p-4 border-l-4 border-accent">
                <div className="text-accent font-bold mb-2">FOXHOUND</div>
                <div className="text-sm text-muted-foreground">18,000 XP required - Elite status!</div>
              </div>
            </div>
          </div>
        </CodecSection>

        {/* XP Earning Methods */}
        <CodecSection title="HOW TO EARN XP">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-4 border-primary pl-4 py-3">
              <div className="text-primary font-bold mb-2">{">"} SEND MESSAGES</div>
              <div className="text-sm text-muted-foreground">
                +3 XP per message (30 second cooldown)
              </div>
            </div>

            <div className="border-l-4 border-primary pl-4 py-3">
              <div className="text-primary font-bold mb-2">{">"} VOICE ACTIVITY</div>
              <div className="text-sm text-muted-foreground">
                +2 XP per minute in voice channels
              </div>
            </div>

            <div className="border-l-4 border-primary pl-4 py-3">
              <div className="text-primary font-bold mb-2">{">"} GIVE REACTIONS</div>
              <div className="text-sm text-muted-foreground">
                +1 XP per reaction given
              </div>
            </div>

            <div className="border-l-4 border-primary pl-4 py-3">
              <div className="text-primary font-bold mb-2">{">"} RECEIVE REACTIONS</div>
              <div className="text-sm text-muted-foreground">
                +2 XP per reaction received
              </div>
            </div>

            <div className="border-l-4 border-accent pl-4 py-3">
              <div className="text-accent font-bold mb-2">{">"} DAILY BONUS</div>
              <div className="text-sm text-muted-foreground">
                +50 XP once per day with streak tracking
              </div>
            </div>

            <div className="border-l-4 border-accent pl-4 py-3">
              <div className="text-primary font-bold mb-2">{">"} TACTICAL WORDS</div>
              <div className="text-sm text-muted-foreground">
                +8 XP per MGS-related word used
              </div>
            </div>
          </div>
        </CodecSection>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground py-6 border-t border-border/30">
          <div className="mb-2">
            {">"} CODEC BOT v2.0 <span className="blink">_</span>
          </div>
          <div className="text-xs">Developed with passion by the Outer Heaven community</div>
        </div>
      </div>
    </main>
  )
}
