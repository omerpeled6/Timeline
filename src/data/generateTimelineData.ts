import { TimelineItem } from '../types'

export default function generateTimelineData(): TimelineItem[] {
  const startDate = new Date('2025-01-14')
  const timeline: TimelineItem[] = []

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startDate)
    currentDate.setDate(startDate.getDate() + i)

    const formattedDate = currentDate.toISOString().split('T')[0]
    for (let hour = 0; hour < 24; hour++) {
      timeline.push({
        date: formattedDate,
        time: `${hour.toString().padStart(2, '0')}:00`,
      })
    }
  }

  return timeline
}
