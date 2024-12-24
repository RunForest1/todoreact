import React, { useEffect, useMemo, useState } from 'react';
import { TodoContext } from './TodoContext';
import axios from 'axios';

export type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
  favorite: boolean;
};

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchtodos = async () => {
      const { data } = await axios.get('https://cms.laurence.host/api');
      setTasks(data);
    };

    fetchtodos();
  }, []);

  useEffect(() => {
    const saveTodos = () => {
      localStorage.setItem('todos', JSON.stringify(tasks));
    };

    window.addEventListener('beforeunload', saveTodos);

    return () => {
      window.removeEventListener('beforeunload', saveTodos);
    };
  }, [tasks]);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');

    if (savedTodos) {
      setTasks(JSON.parse(savedTodos));
    }
  }, []);

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


