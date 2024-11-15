import { Header } from '../components/organisms/Header'
import { TaskPanel } from '../components/organisms/TaskPanel'

export const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <TaskPanel />
    </div>
  )
}
