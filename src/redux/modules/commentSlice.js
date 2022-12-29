import { createSlice } from '@reduxjs/toolkit';

import { fetchGetPosts, fetchNextPosts, fetchGetPost, fetchDeletePost } from '../middleware/thunk';

export const comment = createSlice({
  name: 'comment',
  initialState: {
    isNextPosts: true,
    currPageSize: 0,
    status: '',
    postList: [],
    currPost: {},
  },
  reducers: {
    changeCurrPageSize: (state, { payload }) => {
      state.currPageSize = payload;
    },
  },
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
      })
      .addCase(fetchNextPosts.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchNextPosts.rejected, (state) => {
        return {
          ...state,
          status: 'error',
        };
      })
      .addCase(fetchNextPosts.fulfilled, (state, { payload: { postList } }) => {
        // 상태의 포스트리스트의 길이와 서버데이터의 포스트데이터의 길이가 같지 않으면 true를 할당, 같으면 false를 할당
        const isNextPosts = state.postList.length !== postList.length;
        return {
          ...state,
          status: 'success',
          postList,
          isNextPosts,
        };
      });
    // .addCase(fetchDeletePost.rejected, (state) => {
    //   return {
    //     ...state,
    //     status: 'alert-fail',
    //   };
    // })
    // .addCase(fetchDeletePost.fulfilled, (state) => {
    //   return {
    //     ...state,
    //     status: 'alert-success',
    //   };
    // });
  },
});

export const { changeCurrPageSize } = comment.actions;

const commentReducer = comment.reducer;
export default commentReducer;
