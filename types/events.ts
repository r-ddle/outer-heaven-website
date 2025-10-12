export interface RecurringEvent {
  title: string
  schedule: string
  duration: string
  description: string
  imageUrl?: string
}

export interface SpecialOperation {
  title: string
  frequency: string
  description: string
  borderColor: "accent" | "primary"
}

export interface EventsData {
  recurringEvents: RecurringEvent[]
  specialOperations: SpecialOperation[]
}
