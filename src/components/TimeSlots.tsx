import { TimelineItem } from '../types'

interface TimeSlotsProps {
  times: TimelineItem[]
}

export default function TimeSlots({ times }: TimeSlotsProps): JSX.Element {
  return (
    <div className="flex w-full">
      {times.map((item, index) => (
        <div
          key={index}
          className="text-center py-2 border-r bg-gray-50"
          style={{ width: '5rem' }}
        >
          {item.time}
        </div>
      ))}
    </div>
  )
}
