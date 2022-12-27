import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CommentPage from './pages/CommentPage';
import PostPostPage from './pages/PostPostPage';
import PostLoginPage from './pages/PostLoginPage';
import PostSignUpPage from './pages/PostSignUpPage';
import PostEditPage from './pages/PostEditPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/comment/:id" element={<CommentPage />} />
      <Route path="/posts" element={<PostPostPage />} />
      <Route path="/edit/:id" element={<PostEditPage />} />
      <Route path="/signup" element={<PostSignUpPage />} />
      <Route path="/login" element={<PostLoginPage />} />
    </Routes>
  );
}
