import Timeline from './components/Timeline'
import generateTimelineData from './data/generateTimelineData'
import getContainers from './data/getContainers'

export default function App(): JSX.Element {
  const timelineData = generateTimelineData()
  const containers = getContainers()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Scrollable Weekly Timeline</h1>
      <Timeline timelineData={timelineData} containers={containers} />
    </div>
  )
}
