// store.js
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

export const useTodoStore = create(
  persist(
    set => ({
      todos: [],
      addTodo: todo => set(state => ({todos: [...state.todos, todo]})),
      editTodo: (index, updatedTodo) =>
        set(state => {
          const updatedTodos = [...state.todos];
          updatedTodos[index] = {...updatedTodos[index], ...updatedTodo};
          return {todos: updatedTodos};
        }),

      deleteTodo: index =>
        set(state => ({todos: state.todos.filter((_, i) => i !== index)})),
    }),
    {name: 'todo-storage'},
  ),
);
