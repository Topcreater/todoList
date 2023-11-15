import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useInReivewData = create(
  persist(
    set => ({
      inReview: [],
      addInReview: inReviews =>
        set(state => ({inReview: [...state.inReview, inReviews]})),
      deleteInReview: index =>
        set(state => ({
          inReview: state.inReview.filter((_, i) => i !== index),
        })),
    }),
    {name: 'todo-storage', getStorage: () => AsyncStorage},
  ),
);
