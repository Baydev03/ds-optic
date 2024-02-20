import { productQuery } from './query/productQuery';
import { storesQuery } from './query/storesQuery';
import { configureStore } from '@reduxjs/toolkit';
import { usersQuery } from './query/usersQuery';
import { rootReducer } from './slices';
import { settingsQuery } from './query/settingsQuery';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddlware) => 
    getDefaultMiddlware().concat(
      storesQuery.middleware,
      usersQuery.middleware,
      productQuery.middleware,
      settingsQuery.middleware,
    ),
})