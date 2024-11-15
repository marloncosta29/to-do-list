import { BookOpenText } from '@phosphor-icons/react'

export const EmptyTaskList = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-60 h-full border-t-2 rounded-t-lg border-gray-400">
      <BookOpenText className="text-gray-300" size={64} />
      <div className="flex flex-col items-center">
        <span className="text-gray-300 text-base font-bold">
          Você ainda não tem tarefas cadastradas
        </span>
        <span className="text-gray-300 text-base">
          Crie tarefas e organize seus itens a fazer
        </span>
      </div>
    </div>
  )
}
