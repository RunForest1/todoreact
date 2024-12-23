import styled from "styled-components"
import { useTodo } from "../../../utils";


const Div = styled.header`
    color: white;
    text-align: center;
    padding: 20px;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const Header: React.FC = () => {

  const {tasks} = useTodo();

  return (
    <Div>
        <h1>ToDoList {tasks.length}</h1>
    </Div>
  )
}

