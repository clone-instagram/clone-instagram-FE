import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostPostPage from "../pages/PostPostPage";
import PostLoginPage from "../pages/PostLoginPage";
import PostSignUpPage from "../pages/PostSignUpPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<PostLoginPage />} />
        <Route path="signup" element={<PostSignUpPage />} />
        <Route path="post" element={<PostPostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
