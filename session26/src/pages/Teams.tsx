import { Outlet } from "react-router-dom";

function Teams() {
  return (
    <div>
      <h1>Teams Page</h1>
      {/* Đây là chỗ render nested route */}
      <Outlet />
    </div>
  );
}

export default Teams;