import React from "react";

export default function About() {
  return (
    <div className="text-center mt-[40px]">
      <h1 className="text-[28px] font-medium">Giới thiệt bản thân</h1>
      <p>
        Xin chào! Tôi là <b className="text-blue-500">Nguyễn Văn A</b>, một lập trình viên Frontend đầy đam mê.
        Tôi yêu thích việc xây dựng các ứng dụng web hiện đại và tối ưu trải
        nghiệm người dùng.
      </p><br />
      <p><b className="text-gray-600">Sở thích</b>: Đọc sách, viết code và đi du lịch.</p><br />
      <p><b className="text-gray-600">Mục tiêu</b>: Trở thành một lập trình viên xuất sắc và tạo ra những sản phẩm công nghệ có giá trị!</p>
    </div>
  );
}
