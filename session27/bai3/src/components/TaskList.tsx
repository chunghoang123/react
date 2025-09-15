import { Link } from "react-router-dom";

function TaskList() {
  const tasks = [
    { id: 1, title: "Học React", description: "Ôn tập JSX và component" },
    { id: 2, title: "Học Router", description: "Hiểu về Route, Link, useParams" },
    { id: 3, title: "Học State", description: "Quản lý dữ liệu với useState" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách công việc</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "10px" }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <Link to={`/task/${task.id}`}>Xem chi tiết</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
