import React from "react";

export default function Toolbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0" }}>
      <button style={{ backgroundColor: "#007bff", color: "#fff" }}>Thêm mới sinh viên</button>
      <div>
        <select>
          <option>Sắp xếp theo tuổi</option>
        </select>
        <input type="text" placeholder="Tìm kiếm theo tên hoặc email" style={{ marginLeft: "10px" }} />
      </div>
    </div>
  );
}
