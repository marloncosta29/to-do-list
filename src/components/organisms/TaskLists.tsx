import { useTaskStore } from '../../store'
import { TaskCard } from '../molecules/TaskCard'

export const TaskList = () => {
  const tasks = useTaskStore(state => state.tasks)
  console.log(tasks)
  return (
    <div className="flex flex-col gap-3 overflow-y-scroll no-scrollbar">
      {tasks.map(task => {
        return <TaskCard key={task.id} task={task} />
      })}
    </div>
  )
}
