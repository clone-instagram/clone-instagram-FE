import { createSlice } from '@reduxjs/toolkit';

import { fetchGetPosts, fetchGetPost } from '../middleware/thunk';

export const comment = createSlice({
  name: 'comment',
  initialState: {
    status: '',
    postList: [],
    currPost: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetPosts.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchGetPosts.rejected, (state) => {
        return {
          ...state,
          status: 'error',
        };
      })
      .addCase(
        fetchGetPosts.fulfilled,
        (
          state,
          {
            payload: {
              data: { postList },
            },
          }
        ) => {
          return {
            ...state,
            status: 'success',
            postList,
          };
        }
      )
      .addCase(fetchGetPost.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchGetPost.rejected, (state) => {
        return {
          ...state,
          status: 'error',
        };
      })
      .addCase(fetchGetPost.fulfilled, (state, { payload }) => {
        return {
          ...state,
          status: 'success',
          currPost: { ...payload },
        };
      });
  },
});

// export const {  } = comment.actions;

const commentReducer = comment.reducer;
export default commentReducer;
