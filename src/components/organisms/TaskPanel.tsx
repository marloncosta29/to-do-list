import { useTaskStore } from '../../store'
import { CreatedTasksCounter } from '../molecules/CreatedTasksCounter'
import { DoneTasksCounter } from '../molecules/DoneTasksCounter'
import { EmptyTaskList } from '../molecules/EmptyTaskList'
import { TaskList } from './TaskLists'

export const TaskPanel = () => {
  const tasks = useTaskStore(state => state.tasks)

  return (
    <div className="max-w-[736px] w-full flex flex-col mt-16 gap-6">
      <header className="flex flex-row justify-between w-full">
        <CreatedTasksCounter />
        <DoneTasksCounter />
      </header>
      {tasks.length ? <TaskList /> : <EmptyTaskList />}
    </div>
  )
}
