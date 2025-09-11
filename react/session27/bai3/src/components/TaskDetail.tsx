import { useParams, useNavigate } from "react-router-dom";

function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const tasks = [
    { id: 1, title: "Học React", detail: "Chi tiết: React là thư viện để xây dựng UI." },
    { id: 2, title: "Học Router", detail: "Chi tiết: React Router giúp tạo nhiều trang cho ứng dụng." },
    { id: 3, title: "Học State", detail: "Chi tiết: useState giúp quản lý dữ liệu trong component." },
  ];

  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return <h2 style={{ color: "red" }}>Công việc không tồn tại.</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{task.title}</h2>
      <p>{task.detail}</p>
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
}

export default TaskDetail;
