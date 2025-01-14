export interface TimelineItem {
  date: string
  time: string
}

export interface Event {
  date: string
  startTime: string
  endTime: string
  name: string
}

export interface DateHeaderProps {
  date: string
}

export interface TimeSlotsProps {
  times: TimelineItem[]
}

export interface EventContainersProps {
  events: Event[]
}

export interface TimelineProps {
  timelineData: TimelineItem[]
  containers: Event[]
}
