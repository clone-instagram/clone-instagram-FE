import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import HomePage from "../pages/HomePage";
// import DetailPage from "../pages/DetailPage";
import PostPostPage from "../pages/PostPostPage";
import PostLoginPage from "../pages/PostLoginPage";
import PostSignUpPage from "../pages/PostSignUpPage";
import PostEditPage from "../pages/PostEditPadge";
// import KakaoLogin from "../pages/KakaoLogin";
// import PostEditPage from "../pages/PostEditPadge";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/detail/:id" element={<DetailPage />} /> */}
        <Route path="/" element={<PostLoginPage />} />
        <Route path="/signup" element={<PostSignUpPage />} />
        <Route path="/posts" element={<PostPostPage />} />
        <Route path="/edit/:id" element={<PostEditPage />} />
        {/* <Route path="/api/user/kakao/callback" element={<KakaoLogin />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
