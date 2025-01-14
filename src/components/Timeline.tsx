import DateHeader from './DateHeader'
import TimeSlots from './TimeSlots'
import EventContainers from './EventContainers'
import { TimelineItem, Event } from '../types'

interface TimelineProps {
  timelineData: TimelineItem[]
  containers: Event[]
}

export default function Timeline({
  timelineData,
  containers,
}: TimelineProps): JSX.Element {
  const groupedTimeline: Record<string, TimelineItem[]> = {}

  timelineData.forEach((item) => {
    if (!groupedTimeline[item.date]) {
      groupedTimeline[item.date] = []
    }
    groupedTimeline[item.date].push(item)
  })

  return (
    <div className="overflow-x-auto w-full">
      <div className="flex">
        {Object.keys(groupedTimeline).map((date, index) => (
          <div
            key={`${date}-${index}`}
            className="flex flex-col items-center border-r"
            style={{ width: '120rem' }}
          >
            <DateHeader date={date} />

            <TimeSlots times={groupedTimeline[date]} />

            <EventContainers
              events={containers.filter((event) => event.date === date)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
