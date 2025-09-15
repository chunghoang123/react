import React, { Component } from "react";
type State = {
  email: string;
};
export default class ComponentFrom extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: "",
    };
  }
  handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    this.setState({email:event.target.value});
  }
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const Product = {
      email: this.state.email,
    };
    console.log("email nguoi dung: ", Product);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Email</label>
          <br />
          <input 
          type="Email"
          value={this.state.email} 
          onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
