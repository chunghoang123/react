import React from "react";

interface PostProps {
  id: number;
  title: string;
  content: string;
  author: string;
}

const DetailPost: React.FC<PostProps> = ({ id, title, content, author }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
      <p><strong>Id:</strong> {id}</p>
      <p><strong>Tiêu đề:</strong> {title}</p>
      <p><strong>Nội dung:</strong> {content}</p>
      <p><strong>Tác giả:</strong> {author}</p>
    </div>
  );
};

export default DetailPost;