import React, { Component } from 'react'
const subjects = ["Toán", "Lý", "Hóa", "Văn", "Sử", "Địa"]

export default class SubjectList extends Component {
  render() {
    return (
      <div style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "8px",width: "300px", margin: "20px auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ textAlign: "center" }}>Danh sách môn học</h2>
        <ul style={{ listStyleType: "none", padding: 0, margin: "1rem auto" }}>
          {subjects.map((subject, index) => (
            <li style={{ padding: "10px 20px", border: "1px solid #eee", borderRadius: "4px", textAlign: "center", marginBottom: "10px" }} key={index}>{subject}</li>
          ))}
        </ul>
      </div>
    )
  }
}

