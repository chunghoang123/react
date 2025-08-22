import React, { Component } from "react";
type StateType = {
  color: string;
};
export default class ComponentColor extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      color: "#000000",
    };
  }
  handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    this.setState({color:event.target.value});

  }
  handleSubmit=(event:React.FormEvent)=>{
    event.preventDefault();
    this.setState({
        color:"#ff0000",
    })

  }


  render() {
    return (
      <div>
        <h1>Color: </h1>
        <h3>From</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Màu sắc</label>
          <br />
          <input
           type="color"
           value={this.state.color}
           onChange={this.handleChange} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
