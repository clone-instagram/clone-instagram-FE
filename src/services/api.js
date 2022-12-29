import axios from 'axios';

import { loadItem } from './storage';

const baseURL = axios.create({
  baseURL: 'http://52.79.64.171',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: `${loadItem('id')}`,
  },
});

const POSTS = '/api/posts'; // 전체 게시글
const LIKE_POST = '/api/like/post'; // 게시물 좋아요
const LIKE_COMMENT = '/api/like/comment'; // 댓글 좋아요

// 게시글 전체 조회
export const getPosts = async () => {
  const response = await baseURL.get(POSTS);
  return response.data;
};

// 다음 게시글 전체 조회
export const getNextPosts = async (pageSize) => {
  const response = await baseURL.get(POSTS + `?size=${pageSize}&search=`);
  return response.data;
};

// 단일 게시글 조회
export const getPost = async (postId) => {
  const response = await baseURL.get(POSTS + `/${postId}`);
  return response.data;
};

// 게시글 좋아요
export const likePost = async (postId) => {
  const response = await baseURL.post(LIKE_POST + `/${postId}`);
  return response.data;
};

// 댓글 작성
export const addComment = async (newComment) => {
  const { id, content } = newComment;
  const response = await baseURL.post(POSTS + `/${id}` + '/comments', { content });
  return response.data;
};

// 댓글 좋아요
export const commentLikePost = async (commentId) => {
  const response = await baseURL.post(LIKE_COMMENT + `/${commentId}`);
  return response.data;
};
