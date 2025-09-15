import { Routes, Route, Navigate } from "react-router-dom";
import BlogLayout from "./components/BlogLayout";
import Posts from "./components/Posts";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/blog/posts" replace />} />

      <Route path="/blog" element={<BlogLayout />}>
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostDetail />} />
      </Route>

      <Route path="*" element={<h2>404 - Not Found</h2>} />
    </Routes>
  );
}

export default App;
