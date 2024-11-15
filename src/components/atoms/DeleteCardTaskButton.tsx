import { Trash } from '@phosphor-icons/react'
import { useTaskStore } from '../../store'

type Props = { taskid: number }

export const DeleteCardTaskButton = ({ taskid }: Props) => {
  const removeTask = useTaskStore(state => state.removeTask)
  return (
    <button type="button" onClick={() => removeTask(taskid)}>
      <Trash className="text-gray-300" size={24} />
    </button>
  )
}
