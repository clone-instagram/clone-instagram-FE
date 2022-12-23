import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostPostPage from "../pages/PostPostPage";
import PostLoginPage from "../pages/PostLoginPage";
import SignUp from "../pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<PostLoginPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="post" element={<PostPostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
