import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    return (
      <div>
        <table border={0}>
          <thead style={{ borderBottom: "3px solid black" }}>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Ngày sinh</th>
              <th>Email</th>
              <th>Trạng thái</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>Nguyễn Văn A</th>
              <th>01/01/2000</th>
              <th>vana@gmail.com</th>
              <th>Đang hoạt động</th>
              <th>
                <button>Chặn</button>
                <button>Sửa</button>
                <button>Xóa</button>
              </th>
            </tr>
            <tr>
              <th>2</th>
              <th>Nguyễn Văn B</th>
              <th>02/02/2000</th>
              <th>vanb@gmail.com</th>
              <th>Ngường hoạt động</th>
              <th>
                <button>Chặn</button>
                <button>Sửa</button>
                <button>Xóa</button>
              </th>
            </tr>
          </tbody>
        </table>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 20, gap: 10 }}>
          <button>&#60;</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>&#62; </button>
        </div>
      </div>
    );
  }
}
