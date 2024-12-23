import React from "react";

import { Todo } from "./TodoProvider";


export interface TodoContextProps {
    tasks: Todo[]
    addTask: ({name, description}: Omit<Todo, 'id' | 'checked' | 'favorite'>) => void;
    deleteTask: (id: Todo['id']) => void
    completeTask: (id: Todo['id']) => void
    favoriteTask: (id: Todo['id']) => void
    sortTasks: (key: string) => void
}


export const TodoContext = React.createContext<TodoContextProps>({
    tasks: [],
    addTask: () => {},
    deleteTask: () => {},
    completeTask: () => {},
    favoriteTask: () => {},
    sortTasks: () => {},
});
