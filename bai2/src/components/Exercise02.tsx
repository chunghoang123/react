import React, { Component } from 'react'
interface State{
    id:number;
    name:string;
    date:string;
    address:string;
}
export default class Exercise02 extends Component<object,State> {
    constructor(props:object){
      super (props);
     this.state = {
      id: 1,
      name: "Hoàng Văn Chung",
      date: "20/08/2003",
      address: "Hà Nội, Việt Nam",
      }
        
    }
  render() {
    return (
      <div>
          <div style={{ fontFamily: "Arial", padding: "20px" }}>
        <h2>Thông tin cá nhân</h2>
        <p>
          <strong>ID:</strong> {this.state.id}
        </p>
        <p>
          <strong>Họ và tên:</strong> {this.state.name}
        </p>
        <p>
          <strong>Ngày sinh:</strong> {this.state.date}
        </p>
        <p>
          <strong>Địa chỉ:</strong> {this.state.address}
        </p>
      </div>
      </div>
    )
  }
}
