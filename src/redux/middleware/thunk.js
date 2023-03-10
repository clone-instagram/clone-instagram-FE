import { createAsyncThunk } from '@reduxjs/toolkit';

import { getPosts, getNextPosts, getPost, likePost, addComment, commentLikePost, deletePost } from '../../services/api';

export const fetchGetPosts = createAsyncThunk('india/fetchGetPosts', getPosts);

export const fetchNextPosts = createAsyncThunk(
  'india/fetchNextPosts',
  async (pageSize) => {
    const response = await getNextPosts(pageSize);
    return response.data;
  },
  {
    condition: (payload, { getState }) => (payload !== getState().comment.currPageSize ? true : false),
  }
);

export const fetchGetPost = createAsyncThunk('india/fetchGetPost', async (postId) => {
  const response = await getPost(postId);
  return response.data;
});

export const fetchLikePost = createAsyncThunk('india/fetchLikePost', async (postId, thunkAPI) => {
  await likePost(postId);
  thunkAPI.dispatch(fetchGetPosts());
  thunkAPI.dispatch(fetchGetPost(postId));
});

export const fetchCommentLikePost = createAsyncThunk('india/fetchCommentLikePost', async (commentId, thunkAPI) => {
  await commentLikePost(commentId);
  thunkAPI.dispatch(fetchGetPost(commentId));
  window.location.reload();
});

export const fetchAddComment = createAsyncThunk('india/fetchAddComment', async (newComment, thunkAPI) => {
  await addComment(newComment);
  thunkAPI.dispatch(fetchGetPosts());
  thunkAPI.dispatch(fetchGetPost(newComment.id));
});

export const fetchDeletePost = createAsyncThunk('india/fetchDeletePost', async (postId, thunkAPI) => {
  await deletePost(postId);
  thunkAPI.dispatch(fetchGetPosts());
});
