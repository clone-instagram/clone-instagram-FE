import { configureStore } from "@reduxjs/toolkit";
import posts from "../modules/postSlice";

// import login from "../modules/loginSlice";

const store = configureStore({
  reducer: { posts },
});

export default store;
