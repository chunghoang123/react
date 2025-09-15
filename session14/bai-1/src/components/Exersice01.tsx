import React, { Component } from 'react'
type State = {
    userName:string;
}

export default class Exersice01 extends Component <object,State>{

    constructor(props:object){
        super (props)
        this.state={
            userName:"hoang van chung"

        }
    }
  render() {
    return (
      <div>
        <h1>hello:{this.state.userName}</h1>
        
      </div>
    )
  }
}
