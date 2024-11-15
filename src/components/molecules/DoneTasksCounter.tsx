import { useTaskStore } from '../../store'
import { CounterTag } from '../atoms/CounterTag'

export const DoneTasksCounter = () => {
  const tasks = useTaskStore(s => s.tasks)
  const finishedCount = tasks.filter(t => t.finished).length
  return (
    <div className="flex flex-row gap-2">
      <span className="text-purple">Concluidas</span>
      <CounterTag count={finishedCount} />
    </div>
  )
}
