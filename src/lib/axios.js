import axios from "axios";

// 기본 URL
const instance = axios.create({
  baseURL: "http://13.125.118.137/api",
  header: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// baseURL
export const baseURL = axios.create({
  baseURL: "http://13.125.118.137/api",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

//인스턴스 request header
baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("id");
  config.headers["Authorization"] = `${token}`;
  return config;
});

// apis
export const apis = {
  // 로그인 관련
  postLogin: (login) => instance.post("/user/login", login),
  postSignup: (signup) => instance.post("/user/signup", signup),
  // checkEmail: (email) => instance.get(`/user/idCheck/${email}`),
  postLogout: () => instance.get("/user/logout"),

  // 게시글 관련
  getPost: () => baseURL.get("/posts"),
  getIdPost: (postid) => {
    return baseURL.get(`/posts/${postid}/update`);
  },

  createPost: (posts) => {
    console.log("payload::", posts);
    baseURL.post("/posts", posts, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  deletePost: (postid) => baseURL.delete(`/posts/${postid}`),
  editPost: (postid, posts) =>
    // console.log("string", id, post);
    baseURL.put(`/posts/${postid}`, posts, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  // 리뷰 관련
  // getComment: (postId) => baseURL.get(`/post/${postId}`),
  // createComment: (postId, comment) => {
  //   console.log("postId----->", postId);
  //   baseURL.post(`/posts/${postId}/comment`, comment);
  // },
  // deleteComment: (postId, commendId) =>
  //   baseURL.delete(`/posts/${postId}/comments/${commendId}`),
  // editComment: (postId, commendId, editComment) =>
  //   baseURL.patch(`/posts/${postId}/comments/${commendId}`, editComment),

  // 좋아요 관련
  // likeToggle: (postId) => baseURL.post(`/post/${postId}/like`),
};
