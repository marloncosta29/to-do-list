import type { Task } from '../../store'
import { CheckedCardButton } from '../atoms/CheckedCardButton'
import { DeleteCardTaskButton } from '../atoms/DeleteCardTaskButton'
import { TaskCardLabel } from '../atoms/TaskCardLabel'

type Props = {
  task: Task
}

export const TaskCard = ({ task }: Props) => {
  return (
    <div className="flex flex-row justify-between gap-3 bg-gray-500 p-5 border-[1px] border-gray-400 rounded-lg">
      <CheckedCardButton taskId={task.id} checked={task.finished} />
      <TaskCardLabel text={task.content} checked={task.finished} />
      <DeleteCardTaskButton taskid={task.id} />
    </div>
  )
}
