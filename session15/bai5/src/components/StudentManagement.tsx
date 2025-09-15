import React from "react";
import Toolbar from "./Toolbar";
import StudentTable from "./StudentTable";
import Pagination from "./Pagination";

const students = [
  {
    id: "SV001",
    name: "Nguyễn Văn A",
    dob: "21/12/2023",
    email: "nva@gmail.com",
    status: "active",
  },
  {
    id: "SV002",
    name: "Nguyễn Thị B",
    dob: "21/11/2022",
    email: "ntb@gmail.com",
    status: "inactive",
  },
];

export default function StudentManagement() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#fff" }}>
      <h3>Quản lý sinh viên</h3>
      <Toolbar />
      <StudentTable students={students} />
      <Pagination />
    </div>
  );
}
