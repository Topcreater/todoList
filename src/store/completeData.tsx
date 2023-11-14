// store.js
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

export const useCompleteDataStore = create(
  persist(
    set => ({
      complete: [],
      addComplete: completes =>
        set(state => ({complete: [...state.complete, completes]})),
      deleteComplete: index =>
        set(state => ({
          complete: state.complete.filter((_, i) => i !== index),
        })),
    }),
    {name: 'todo-storage'},
  ),
);
