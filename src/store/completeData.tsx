import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    {name: 'todo-storage', getStorage: () => AsyncStorage},
  ),
);
