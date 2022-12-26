import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CommentPage from './pages/CommentPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/comment/:id" element={<CommentPage />} />
    </Routes>
  );
}
