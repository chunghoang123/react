import { Link } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  excerpt: string;
}

function Posts() {
  const posts: Post[] = [
    { id: 1, title: "Bài viết 1", excerpt: "Giới thiệu ngắn gọn về bài viết 1." },
    { id: 2, title: "Bài viết 2", excerpt: "Giới thiệu ngắn gọn về bài viết 2." },
    { id: 3, title: "Bài viết 3", excerpt: "Giới thiệu ngắn gọn về bài viết 3." },
    { id: 4, title: "Bài viết 4", excerpt: "Giới thiệu ngắn gọn về bài viết 4." },
    { id: 5, title: "Bài viết 5", excerpt: "Giới thiệu ngắn gọn về bài viết 5." },
  ];

  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <Link to={`/blog/posts/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
