type Props = { count: number }
export const CounterTag = ({ count }: Props) => {
  return (
    <div className="flex items-center justify-center bg-gray-400 px-2 py-[2px] rounded-lg text-xs font-bold">
      <span className="text-gray-100">{count}</span>
    </div>
  )
}
