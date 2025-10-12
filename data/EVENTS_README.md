# Events Data Management

This guide explains how to add and manage events for the Outer Heaven website.

## File Locations

- **Active Events**: `/data/events.json` - This is the live events data displayed on the website
- **Template**: `/data/events.template.json` - Use this as a reference for the structure
- **Types**: `/types/events.ts` - TypeScript type definitions

## Adding Recurring Events

Recurring events appear in the "RECURRING MISSIONS" section. Copy this structure and add it to the `recurringEvents` array in `/data/events.json`:

```json
{
  "title": "YOUR EVENT NAME",
  "schedule": "When it happens (e.g., Every Friday @ 20:00 UTC)",
  "duration": "How long (e.g., 3-4 hours)",
  "description": "Detailed description of the event and what participants can expect",
  "imageUrl": "/path-to-image.jpg"
}
```

**Note**: The `imageUrl` field is optional. If omitted, no image will be displayed.

### Example:

```json
{
  "recurringEvents": [
    {
      "title": "WEEKLY GAME NIGHTS",
      "schedule": "Every Friday @ 20:00 UTC",
      "duration": "3-4 hours",
      "description": "Join fellow operatives for co-op missions and competitive matches. We rotate through various titles including MGS games, tactical shooters, and community favorites. Voice chat recommended!",
      "imageUrl": "/game-night.jpg"
    }
  ],
  "specialOperations": []
}
```

## Adding Special Operations

Special operations appear in the "SPECIAL OPERATIONS" section as cards. Copy this structure and add it to the `specialOperations` array:

```json
{
  "title": "YOUR OPERATION NAME",
  "frequency": "How often (e.g., QUARTERLY EVENT, MONTHLY EVENT, BI-MONTHLY EVENT, ANNUAL EVENT)",
  "description": "Brief description of the special operation",
  "borderColor": "accent"
}
```

**Note**: `borderColor` can be either `"accent"` (yellow) or `"primary"` (green).

### Example:

```json
{
  "recurringEvents": [],
  "specialOperations": [
    {
      "title": "TOURNAMENT SEASON",
      "frequency": "QUARTERLY EVENT",
      "description": "Competitive tournaments with brackets, prizes, and glory. Open to all skill levels with separate divisions.",
      "borderColor": "accent"
    },
    {
      "title": "MOVIE NIGHTS",
      "frequency": "MONTHLY EVENT",
      "description": "Watch MGS cutscene compilations, documentaries, and related films together. Community voting for selections.",
      "borderColor": "primary"
    }
  ]
}
```

## Full Example

Here's a complete example with multiple events:

```json
{
  "recurringEvents": [
    {
      "title": "WEEKLY GAME NIGHTS",
      "schedule": "Every Friday @ 20:00 UTC",
      "duration": "3-4 hours",
      "description": "Join fellow operatives for co-op missions and competitive matches.",
      "imageUrl": "/game-night.jpg"
    },
    {
      "title": "MGS LORE DISCUSSIONS",
      "schedule": "Bi-weekly Sundays @ 18:00 UTC",
      "duration": "1-2 hours",
      "description": "Deep dive into Metal Gear lore, theories, and analysis."
    }
  ],
  "specialOperations": [
    {
      "title": "TOURNAMENT SEASON",
      "frequency": "QUARTERLY EVENT",
      "description": "Competitive tournaments with brackets, prizes, and glory.",
      "borderColor": "accent"
    },
    {
      "title": "ANNIVERSARY CELEBRATION",
      "frequency": "ANNUAL EVENT",
      "description": "Celebrate Outer Heaven's birthday with special events all weekend long.",
      "borderColor": "accent"
    }
  ]
}
```

## Empty State

When no events are scheduled, the events page will automatically display a message:
- Recurring Events: "> NO RECURRING MISSIONS SCHEDULED AT THIS TIME"
- Special Operations: "> NO SPECIAL OPERATIONS SCHEDULED AT THIS TIME"

This is controlled by checking if the arrays are empty (`length > 0`).

## Tips

1. **Keep descriptions concise** - They should be informative but not too long
2. **Use UPPERCASE for titles** - Maintains the tactical/military aesthetic
3. **Be specific with schedules** - Include timezone (UTC is recommended)
4. **Test your JSON** - Make sure there are no syntax errors (missing commas, brackets, etc.)
5. **Images are optional** - Only add `imageUrl` if you have an appropriate image

## Validation

The TypeScript types in `/types/events.ts` will help catch errors:
- Missing required fields
- Wrong field types
- Invalid `borderColor` values (must be "accent" or "primary")

After updating `/data/events.json`, the website will automatically reflect your changes!
