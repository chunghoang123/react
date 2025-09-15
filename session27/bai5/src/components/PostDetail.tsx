import { useParams } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  content: string;
}

function PostDetail() {
  const { id } = useParams<{ id: string }>();

  const posts: Post[] = [
    { id: 1, title: "Bài viết 1", content: "Nội dung chi tiết bài viết 1..." },
    { id: 2, title: "Bài viết 2", content: "Nội dung chi tiết bài viết 2..." },
    { id: 3, title: "Bài viết 3", content: "Nội dung chi tiết bài viết 3..." },
    { id: 4, title: "Bài viết 4", content: "Nội dung chi tiết bài viết 4..." },
    { id: 5, title: "Bài viết 5", content: "Nội dung chi tiết bài viết 5..." },
  ];

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <h2 style={{ color: "red" }}>Bài viết không tồn tại</h2>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
