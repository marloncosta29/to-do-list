import { PlusCircle } from '@phosphor-icons/react'
import type { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: Props) => {
  return (
    <button
      type="button"
      className="flex flex-row gap-2 items-center p-4 rounded-lg bg-blue-dark text-gray-100 hover:bg-blue font-bold transition ease-in-out"
      {...props}
    >
      Criar
      <PlusCircle size={20} />
    </button>
  )
}
