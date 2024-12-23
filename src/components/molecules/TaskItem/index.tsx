import React from 'react'
import { Todo } from '../../../utils/contextes/TodoProvider'
import styled from 'styled-components'
import { But } from '../../atoms/Button';
import { Typography } from 'antd';



interface TaskItemProps {
  task: Todo;
  deleteTask: (id: Todo['id']) => void;
  completeTask: (id: Todo['id']) => void;
  favoriteTask:  (id: Todo['id']) => void;
}

const Item = styled.div`
  justify-content: space-between;
  width: 80%;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  gap: 10px;
  background-color: #041931;
`

const ButItem = styled.div`
  display: flex;
  items-align: center;
  justify-content: end;
  gap: 10px;
`

export const TaskItem: React.FC<TaskItemProps> = ({task , deleteTask, completeTask, favoriteTask}) => {
  return (
    <Item>
      <Typography
        style={{color: "white", fontSize: "20px", textDecoration: task.checked ? "line-through" : "none"}}
      >
        {task.name}
      </Typography>
      <Typography
        style={{color: "white", fontSize: "14px"}}
      >
        {task.description}
      </Typography>
      <ButItem>
        <But color='red' onClick={() => deleteTask(task.id)} >Delete</But>
        <But
        style={task.favorite ? {color: "yellow", backgroundColor: "#041931", border: "1px solid yellow"}: {color: "white", backgroundColor: "#041931"}}
        color='yellow' onClick={() => favoriteTask(task.id)}>☆</But>
        <But 
        style={task.checked ? {color: "green", backgroundColor: "#041931", border: "1px solid green"} : {color: "white", backgroundColor: "#041931"}}
        color='black' onClick={() => completeTask(task.id)}>✓</But>
      </ButItem>
    </Item>
  )
}
