import { Event } from '../types'

interface EventContainersProps {
  events: Event[]
}

export default function EventContainers({
  events,
}: EventContainersProps): JSX.Element {
  return (
    <div className="relative w-full h-20">
      {events.map((event, index) => {
        // Safely parse start and end hours
        const startHour = parseInt(event.startTime.split(':')[0]) || 0
        const endHour = parseInt(event.endTime.split(':')[0]) || 0
        const duration = Math.max(endHour - startHour, 0) // Ensure no negative duration

        // Style for positioning the event
        const eventStyle = {
          left: `${startHour * 5}rem`,
          width: `${duration * 5}rem`,
          top: '2rem',
        }

        return (
          <div
            key={index}
            className="absolute bg-blue-500 text-white text-sm text-center py-1 px-2 rounded"
            style={eventStyle}
          >
            {event.name}
          </div>
        )
      })}
    </div>
  )
}
