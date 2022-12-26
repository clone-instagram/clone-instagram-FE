import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CommentPage from './pages/CommentPage';
import PostPostPage from './pages/PostPostPage';
import PostLoginPage from './pages/PostLoginPage';
import PostSignUpPage from './pages/PostSignUpPage';
// import PostEditPage from "../pages/PostEditPadge";

export default function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/comment/:id" element={<CommentPage />} />
      <Route path="/post" element={<PostPostPage />} />
      <Route path="/" element={<PostLoginPage />} />
      <Route path="/signup" element={<PostSignUpPage />} />
      {/* <Route path="edit" element={<PostEditPage />} /> */}
    </Routes>
  );
}
