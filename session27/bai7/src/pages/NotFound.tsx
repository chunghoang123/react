import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ color: "red" }}>Trang bạn tìm không tồn tại.</h1>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate("/")}
          style={{ marginRight: "10px", padding: "8px 16px" }}
        >
          Quay về trang chủ
        </button>
        <button
          onClick={() => navigate(-1)}
          style={{ padding: "8px 16px" }}
        >
          Quay lại
        </button>
      </div>
    </div>
  );
}

export default NotFound;
