import React, { useMemo, useState } from 'react';
import { TodoContext } from './TodoContext';

export type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
  favorite: boolean;
};

export const TASKS = [
  {
    id: 1,
    name: 'Task 1',
    description: 'Description 1',
    checked: false,
    favorite: false,
  },
  {
    id: 2,
    name: 'Task 2',
    description: 'Description 2',
    checked: false,
    favorite: false,
  },
  {
    id: 3,
    name: 'Task 3',
    description: 'Description 3',
    checked: true,
    favorite: true,
  },
];

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Todo[]>(TASKS);

  const addTask = ({
    name,
    description,
  }: Omit<Todo, 'id' | 'checked' | 'favorite'>) => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, name, description, checked: false, favorite: false },
    ]);
  };

  const deleteTask = (id: Todo['id']) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id: Todo['id']) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const favoriteTask = (id: Todo['id']) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, favorite: !task.favorite } : task
      )
    );
  };

  const sortTasks = (key: string) => {
    let sortedTasks = [...tasks];

    switch (key) {
      case '1':
        sortedTasks.sort((a, b) => a.id - b.id);
        break;
      case '2':
        sortedTasks.sort((a, b) => (b.favorite ? 1 : 0) - (a.favorite ? 1 : 0));
        break;
      case '3':
        sortedTasks.sort((a, b) => (b.checked ? 1 : 0) - (a.checked ? 1 : 0));
        break;
      case '4':
        sortedTasks.sort((a, b) => (a.checked ? 1 : 0) - (b.checked ? 1 : 0));
        break;
      default:
        break;
    }

    setTasks(sortedTasks);
  };

  const value = useMemo(
    () => ({
      tasks,
      addTask,
      deleteTask,
      completeTask,
      favoriteTask,
      sortTasks,
    }),
    [tasks]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

