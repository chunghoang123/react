import React from "react";
import StudentRow from "./StudentRow";

type Student = {
  id: string;
  name: string;
  dob: string;
  email: string;
  status: "active" | "inactive";
};

type Props = {
  students: Student[];
};

export default function StudentTable({ students }: Props) {
  return (
    <table border={1} cellPadding={10} style={{ width: "100%", marginTop: "10px" }}>
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã sinh viên</th>
          <th>Tên sinh viên</th>
          <th>Ngày sinh</th>
          <th>Email</th>
          <th>Trạng thái</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <StudentRow key={student.id} index={index} student={student} />
        ))}
      </tbody>
    </table>
  );
}
