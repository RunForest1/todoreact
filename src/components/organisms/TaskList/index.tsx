import { useTodo } from "../../../utils"
import { TaskItem } from "../../molecules/TaskItem"
import styled from "styled-components"

const List = styled.div`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    background-color: #183B5E;
    border-radius: 0px 0px 5px 5px;
    padding: 20px;
    gap: 10px;
    display: flex;
    flex-direction: column;
`

export const TaskList: React.FC = () => {

  const {tasks, deleteTask, completeTask, favoriteTask} = useTodo();

  return (
    <List>
        {tasks.map((task) => (
            <TaskItem 
            key={task.id}
            task={task} 
            deleteTask={deleteTask} 
            completeTask={completeTask}
            favoriteTask={favoriteTask}
            />
        ))}
    </List>
  )
}
