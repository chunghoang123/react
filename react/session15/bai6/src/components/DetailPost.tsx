import React from "react";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type Props = {
  post: Post;
};

export default function DetailPost({ post }: Props) {
  return (
    <div style={{ marginBottom: "15px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
      <p><strong>Id:</strong> {post.id}</p>
      <p><strong>Title:</strong> {post.title}</p>
      <p><strong>Content:</strong> {post.content}</p>
      <p><strong>Author:</strong> {post.author}</p>
    </div>
  );
}
