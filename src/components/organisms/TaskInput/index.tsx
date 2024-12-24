import { Menu } from "antd"
import type { MenuProps } from 'antd'
import React, { useState } from "react"
import styled from "styled-components"
import { But } from "../../atoms/Button"
import { TodoContext } from "../../../utils"
import { InputBox } from "../../atoms/Input"

const InputWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  background-color: #183b5e;
  padding: 20px;
  border-radius: 5px 5px 0 0;
  gap: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DEFAULT_INPUT = {
  task: "",
  description: "",
}

type MenuItem = Required<MenuProps>['items'][number]

const menuItems: MenuItem[] = [
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
]

export const TaskInput: React.FC = () => {
  const { addTask, sortTasks } = React.useContext(TodoContext)
  const [input, setInput] = useState(DEFAULT_INPUT)
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  const onClick = () => {
    addTask({ name: input.task, description: input.description })
    setInput(DEFAULT_INPUT)
  }

  const onClickMenu: MenuProps['onClick'] = (e) => {
    sortTasks(e.key)
    setCurrent(e.key)
  }
  const [current, setCurrent] = useState('1')

  return (
    <InputWrapper>
      <InputBox
        task={input}
        type="task"
        onChange={onChange}
      />
      <InputBox
        task={input}
        type="description"
        onChange={onChange}
      />
      <But color='white' onClick={onClick}>Add</But>
      <Menu
        style={{ borderRadius: "25px", border: "none", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        defaultSelectedKeys={['1']}
        onClick={onClickMenu}
        selectedKeys={[current]}
        mode="inline"
        theme="dark"
        items={menuItems}
      />
    </InputWrapper>
  )
}

