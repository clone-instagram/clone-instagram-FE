import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import commentReducer from '../modules/postSlice';
import post from '../modules/postSlice';
import comment from '../modules/commentSlice';

const store = configureStore({
  reducer: { commentReducer, post, comment },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
