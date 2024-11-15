import type { InputHTMLAttributes } from 'react'
import clsx from 'clsx'
type Props = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ className, ...props }: Props) => {
  return (
    <input
      className={clsx(
        'bg-gray-500 border-2 border-gray-500 p-4 rounded-lg text-white focus:border-purple-dark focus:outline-none',
        className
      )}
      {...props}
    />
  )
}
