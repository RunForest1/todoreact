import React from 'react'
import { Input } from 'antd';

const { TextArea } = Input;

interface InputProps {
    task: {
        task: string,
        description: string,
    }
    type: string
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export const InputBox: React.FC<InputProps> = ({task, onChange, type}) => {
  return (
    <>
    {type === 'task' ? (
        <Input
          style={{ width: '20%', color: 'black' }}
          placeholder="Task"
          value={task.task}
          id="task"
          name="task"
          onChange={onChange}
        />
      ) : (
        <TextArea
          style={{ minWidth: '35%', color: 'black', overflow: 'auto' }}
          placeholder="Description"
          value={task.description}
          id="description"
          name="description"
          onChange={onChange}
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      )}
    </>
  )
}

