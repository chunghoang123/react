import React, {useState}from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Student() {
    const [studentName,setStudentName] = useState("");
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const currentStudent = searchParams.get("studentName");


    const handleSearch = ()=>{
        if(studentName.trim()) {
            navigate(`/student?studentName=${studentName}`)

        }
    };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        style={{ padding: "6px 10px", marginRight: "8px" }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "6px 12px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Tìm kiếm
      </button>

      {currentStudent && (
        <p style={{ marginTop: "20px" }}>
          Từ khóa đang tìm: <b>{currentStudent}</b>
        </p>
      )}
    </div>
  );
}
