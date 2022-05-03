import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './slice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
});
