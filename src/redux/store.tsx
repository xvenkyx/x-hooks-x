// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

// Types for useSelector and useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type CounterDispatch = typeof store.dispatch;
