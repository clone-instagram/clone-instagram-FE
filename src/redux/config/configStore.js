import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import commentReducer from '../modules/commentSlice';
import post from '../modules/postSlice';

const store = configureStore({
  reducer: { post, commentReducer },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
