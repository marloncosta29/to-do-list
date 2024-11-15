// TODO: poderia ser usado composição para os componentes de card
// mas preferi usar componentes searados

import clsx from 'clsx'
import type { HTMLAttributes } from 'react'

type Props = {
  text: string
  checked: boolean
} & HTMLAttributes<HTMLSpanElement>

export const TaskCardLabel = ({ text, checked, className, ...rest }: Props) => {
  return (
    <span
      className={clsx(
        'flex-1 text-sm text-gray-100',
        {
          'text-gray-300 line-through': checked,
        },
        className
      )}
      {...rest}
    >
      {text}
    </span>
  )
}
