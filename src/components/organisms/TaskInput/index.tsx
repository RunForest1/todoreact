import { Menu } from "antd"
import type { MenuProps } from 'antd';
import React, { useState } from "react";
import styled from "styled-components"
import { But } from "../../atoms/Button";
import { TodoContext } from "../../../utils";
import { InputBox } from "../../atoms/Input";

const Div = styled.div`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    background-color: #183B5E;
    padding: 20px;
    border-radius: 5px 5px 0 0;
    gap: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const DEFAULT = {
  task: "",
  description: "",
};

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Sorting',
    key: 'sort',
    children: [
      {
        label: 'All',
        key: '1',
      },
      {
        label: 'Favorite',
        key: '2',
      },
      {
        label: 'Completed',
        key: '3',
      },
      {
        label: 'None completed',
        key: '4',
      },
    ],
  },
];

export const TaskInput: React.FC = () => {
  
  const { addTask, sortTasks } = React.useContext(TodoContext);
  const [task, setTask] = useState(DEFAULT);
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setTask({ ...task, [name]: value });
  }

  const onClick = () => {
    addTask({name: task.task, description: task.description});
    setTask(DEFAULT);
  }

  const onClickMenu: MenuProps['onClick'] = (e) => {
    console.log(e.key);
    sortTasks(e.key);
    setCurrent(e.key);
  };
  const [current, setCurrent] = useState('1');

  return (
    <Div>
        <InputBox
        task = {task}
        type = "task"
        onChange={onChange}
        />
        <InputBox
        task={task}
        type="description"
        onChange={onChange}
        />
        <But color='white' onClick={onClick}>Add</But>
        <Menu 
        style={{borderRadius: "25px", border: "none", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}
        defaultSelectedKeys={['1']}
        onClick={onClickMenu} 
        selectedKeys={[current]} 
        mode="inline" 
        theme="dark"
        items={items} 
        />
    </Div>
  )
}

