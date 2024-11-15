import { type HtmlHTMLAttributes, useState } from 'react'
import { Circle, CheckCircle } from '@phosphor-icons/react'
import { useTaskStore } from '../../store'

type Props = {
  taskId: number
  checked: boolean
} & HtmlHTMLAttributes<HTMLButtonElement>

export const CheckedCardButton = ({ taskId, checked, ...rest }: Props) => {
  const finishTask = useTaskStore(state => state.finishTask)
  return (
    <button type="button" onClick={() => finishTask(taskId)} {...rest}>
      {checked ? (
        <CheckCircle className="text-purple-dark" weight="fill" size={24} />
      ) : (
        <Circle className="text-blue" size={24} />
      )}
    </button>
  )
}
