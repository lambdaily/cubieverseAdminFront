import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './tokenSlice';
import paginationReducer from './paginationSlice';

export const store = configureStore({
  reducer: {
    auth: tokenReducer,
    pagination: paginationReducer
  },
});