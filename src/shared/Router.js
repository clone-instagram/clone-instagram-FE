import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostPostPage from "../pages/PostPostPage";
import PostLoginPage from "../pages/PostLoginPage";
import PostSignUpPage from "../pages/PostSignUpPage";
// import PostEditPage from "../pages/PostEditPadge";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<PostLoginPage />} />
        <Route path="signup" element={<PostSignUpPage />} />
        <Route path="post" element={<PostPostPage />} />
        {/* <Route path="edit" element={<PostEditPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
