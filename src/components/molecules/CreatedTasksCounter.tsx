import { useTaskStore } from '../../store'
import { CounterTag } from '../atoms/CounterTag'

export const CreatedTasksCounter = () => {
  const tasks = useTaskStore(s => s.tasks)
  return (
    <div className="flex flex-row gap-2">
      <span className="text-blue">Tarefas criadas</span>
      <CounterTag count={tasks.length} />
    </div>
  )
}
