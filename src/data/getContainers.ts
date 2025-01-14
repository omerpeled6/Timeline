import { Event } from '../types'

export default function getContainers(): Event[] {
  return [
    {
      date: '2025-01-14',
      startTime: '06:00',
      endTime: '11:00',
      name: 'Product A',
    },
    {
      date: '2025-01-14',
      startTime: '12:00',
      endTime: '14:00',
      name: 'Product B',
    },
    {
      date: '2025-01-15',
      startTime: '10:00',
      endTime: '12:00',
      name: 'Product C',
    },
    {
      date: '2025-01-16',
      startTime: '14:00',
      endTime: '16:00',
      name: 'Product D',
    },
    {
      date: '2025-01-17',
      startTime: '08:00',
      endTime: '12:00',
      name: 'Product E',
    },
    {
      date: '2025-01-18',
      startTime: '13:00',
      endTime: '15:00',
      name: 'Product F',
    },
    {
      date: '2025-01-19',
      startTime: '16:00',
      endTime: '18:00',
      name: 'Product G',
    },
  ]
}
