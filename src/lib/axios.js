import axios from "axios";

// 기본 URL
const instance = axios.create({
  baseURL: "http://52.79.64.171/api",
  header: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// baseURL
export const baseURL = axios.create({
  baseURL: "http://52.79.64.171/api",
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
  console.log("token::", token);
  config.headers["Authorization"] = `${token}`;
  return config;
});

// apis
export const apis = {
  // 로그인 관련1  +
  postLogin: (login) => instance.post("/user/login", login),
  postSignup: (signup) => instance.post("/user/signup", signup),
  // checkEmail: (email) => instance.get(`/user/idCheck/${email}`),
  postLogout: () => instance.get("/user/logout"),

  // 게시글 관련
  getPost: () => baseURL.get(`/posts`),
  getIdPost: (id) => {
    return baseURL.get(`/posts/${id}/update`);
  },

  // getUsername : (postid) => {
  //   return baseURL.get(`/posts/${postid}`)
  // },

  createPost: (posts) => {
    console.log("payload::", posts);
    baseURL.post("/posts", posts, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  deletePost: (id) => baseURL.delete(`/posts/${id}`),

  editPost: ({ id, formdata }) => {
    // console.log("string", payload);
    baseURL.patch(`/posts/${id}`, formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  // editPost: (id, post) =>
  //   // console.log("string", id, post);
  //   baseURL.put(`/posts/${id}`, post, {
  //     headers: { "Content-Type": "multipart/form-data" },
  //   }),

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
