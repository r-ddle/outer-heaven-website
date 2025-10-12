import { CodecHeader } from "@/components/codec-header"
import { Navigation } from "@/components/navigation"
import { CodecSection } from "@/components/codec-section"
import { TerminalText } from "@/components/terminal-text"
import eventsDataRaw from "@/data/events.json"
import type { EventsData, RecurringEvent, SpecialOperation } from "@/types/events"

const events: EventsData = eventsDataRaw

export default function EventsPage() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <CodecHeader />
        <Navigation />

        {/* Events Header */}
        <div className="codec-frame p-8 bg-card/30 text-center">
          <div className="corner-bl"></div>
          <div className="corner-br"></div>

          <div
            className="text-accent text-3xl md:text-4xl font-bold mb-3"
            style={{ fontFamily: "HeaderFont" }}
          >
            ACTIVE OPERATIONS
          </div>
          <div className="text-muted-foreground">{">"} Join our scheduled events and community activities</div>
        </div>

        {/* Recurring Events */}
        <CodecSection title="RECURRING MISSIONS">
          {events.recurringEvents.length > 0 ? (
            <div className="space-y-6">
              {events.recurringEvents.map((event, index) => (
                <div key={index} className="feature-card p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    {event.imageUrl && (
                      <div className="screenshot-hover overflow-hidden flex items-start justify-center">
                        <img
                          src={event.imageUrl}
                          alt={event.title}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    )}
                    <div className="md:col-span-2">
                      <div className="text-accent text-2xl font-bold mb-3">{event.title}</div>
                      <TerminalText>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-primary font-bold">SCHEDULE:</span>
                            <span>{event.schedule}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-primary font-bold">DURATION:</span>
                            <span>{event.duration}</span>
                          </div>
                          <div className="mt-4">
                            {event.description.split('\n').map((line, i) => (
                              <div key={i} className={line.startsWith('**') && line.endsWith('**') ? 'font-bold mt-2 mb-1' : line.trim() === '' ? 'mb-2' : ''}>
                                {line.startsWith('**') && line.endsWith('**')
                                  ? line.slice(2, -2)
                                  : line.startsWith('•')
                                    ? <span className="ml-2">{line}</span>
                                    : line
                                }
                              </div>
                            ))}
                          </div>
                        </div>
                      </TerminalText>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <TerminalText>
                <div className="text-muted-foreground">
                  {">"} NO RECURRING MISSIONS SCHEDULED AT THIS TIME
                  <div className="mt-2 text-sm">Check back later or see Discord announcements for updates</div>
                </div>
              </TerminalText>
            </div>
          )}
        </CodecSection>

        {/* Special Events */}
        <CodecSection title="SPECIAL OPERATIONS">
          {events.specialOperations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {events.specialOperations.map((operation, index) => (
                <div
                  key={index}
                  className={`bg-card/50 p-6 border-l-4 ${
                    operation.borderColor === "accent" ? "border-accent" : "border-primary"
                  }`}
                >
                  <div
                    className={`${
                      operation.borderColor === "accent" ? "text-accent" : "text-primary"
                    } text-xl font-bold mb-3`}
                  >
                    {operation.title}
                  </div>
                  <TerminalText>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground mb-2">{operation.frequency}</div>
                      <div>{operation.description}</div>
                    </div>
                  </TerminalText>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <TerminalText>
                <div className="text-muted-foreground">
                  {">"} NO SPECIAL OPERATIONS SCHEDULED AT THIS TIME
                  <div className="mt-2 text-sm">Check Discord for announcements about upcoming events</div>
                </div>
              </TerminalText>
            </div>
          )}
        </CodecSection>

        {/* Event Rules */}
        <CodecSection title="EVENT GUIDELINES">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-4 border-primary pl-4 py-3">
              <div className="text-primary font-bold mb-2">{">"} BE RESPECTFUL</div>
              <div className="text-sm text-muted-foreground">
                Maintain friendly competition and good sportsmanship at all times
              </div>
            </div>

            <div className="border-l-4 border-primary pl-4 py-3">
              <div className="text-primary font-bold mb-2">{">"} FOLLOW HOST INSTRUCTIONS</div>
              <div className="text-sm text-muted-foreground">
                Event hosts have final say on rules and decisions during activities
              </div>
            </div>

            <div className="border-l-4 border-primary pl-4 py-3">
              <div className="text-primary font-bold mb-2">{">"} NO CHEATING</div>
              <div className="text-sm text-muted-foreground">
                Any form of cheating results in immediate disqualification and potential ban
              </div>
            </div>

            <div className="border-l-4 border-primary pl-4 py-3">
              <div className="text-primary font-bold mb-2">{">"} HAVE FUN</div>
              <div className="text-sm text-muted-foreground">
                Events are about community and enjoyment - don't take things too seriously!
              </div>
            </div>
          </div>
        </CodecSection>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground py-6 border-t border-border/30">
          <div className="mb-2">
            {">"} EVENT CALENDAR UPDATED WEEKLY <span className="blink">_</span>
          </div>
          <div className="text-xs">Check Discord announcements for schedule changes</div>
        </div>
      </div>
    </main>
  )
}
