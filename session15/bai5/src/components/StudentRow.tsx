import React from "react";

type Student = {
  id: string;
  name: string;
  dob: string;
  email: string;
  status: "active" | "inactive";
};

type Props = {
  index: number;
  student: Student;
};

export default function StudentRow({ index, student }: Props) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.dob}</td>
      <td>{student.email}</td>
      <td>
        <span
          style={{
            color: student.status === "active" ? "green" : "red",
            fontWeight: "bold",
          }}
        >
          {student.status === "active" ? "Đang hoạt động" : "Ngừng hoạt động"}
        </span>
      </td>
      <td>
        <button>Chặn</button>
        <button>Sửa</button>
        <button>Xóa</button>
      </td>
    </tr>
  );
}
