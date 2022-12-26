import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import commentReducer from '../modules/postSlice';
import post from '../modules/postSlice';

const store = configureStore({
  reducer: { commentReducer, post },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
