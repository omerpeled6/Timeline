interface DateHeaderProps {
  date: string
}

export default function DateHeader({ date }: DateHeaderProps): JSX.Element {
  return (
    <div className="text-center font-bold bg-gray-200 py-2 w-full border-b">
      {date}
    </div>
  )
}
