import { useState } from 'react'
import { useTaskStore } from '../../store'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'

export const NewTaskInput = () => {
  const addTask = useTaskStore(state => state.addTask)
  const [content, setContent] = useState('')

  function addTaskHandler() {
    if (content.length > 0) {
      console.log(content)
      addTask(content)
    }
  }

  return (
    <div className="flex flex-row gap-2 max-w-[736px] w-full">
      <Input
        className="flex-1"
        value={content}
        onChange={event => setContent(event.target.value)}
      />
      <Button onClick={addTaskHandler} />
    </div>
  )
}
