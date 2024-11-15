import { create } from 'zustand'

export interface Task {
  id: number
  content: string
  finished: boolean
}

interface TasksState {
  tasks: Task[]
  addTask: (content: string) => void
  removeTask: (taskId: number) => void
  finishTask: (taskId: number) => void
}

export const useTaskStore = create<TasksState>()(set => ({
  tasks: [],
  addTask: content =>
    set(state => {
      const newTask: Task = {
        id: state.tasks.length + 1,
        content: content,
        finished: false,
      }
      return { ...state, tasks: [...state.tasks, newTask] }
    }),
  removeTask: taskId =>
    set(state => {
      const tasks = [...state.tasks]
      console.log({ tasks, taskId })
      const index = tasks.findIndex(t => t.id === taskId)
      if (index > -1) {
        tasks.splice(index, 1)
      }
      console.log({ tasks, index })
      return { ...state, tasks: [...tasks] }
    }),
  finishTask: taskId =>
    set(state => {
      const tasks = [...state.tasks]
      const index = tasks.findIndex(t => t.id === taskId)
      if (index > -1) {
        tasks[index].finished = !tasks[index].finished
      }
      return { ...state, tasks: [...tasks] }
    }),
}))
