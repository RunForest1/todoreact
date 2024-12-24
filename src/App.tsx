import { Header } from "./components/organisms/Header"
import { TaskInput } from "./components/organisms/TaskInput"
import { TaskList } from "./components/organisms/TaskList"
import { TodoProvider } from "./utils";


function App() {

  return (
    <TodoProvider>
      <Header />
      <TaskInput />
      <TaskList />
    </TodoProvider>
  )
}

export default App

