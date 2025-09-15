import { Link, Outlet } from "react-router-dom";

function BlogLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside style={{ width: "200px", background: "#f0f0f0", padding: "20px" }}>
        <h2>My Blog</h2>
        <nav>
          <ul>
            <li>
              <Link to="/blog/posts">Posts</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default BlogLayout;
