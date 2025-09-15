import React, { Component } from "react";

export default class ComponentButtom extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
          <button style={{backgroundColor:"#0d6efd",color:"#ffffff", width:"100px",height:"50px",borderRadius:"8px",border:"none"}}>Primary</button>
          <button style={{backgroundColor:"#6c757d",color:"#ffffff", width:"100px",height:"50px",borderRadius:"8px",border:"none"}}>Secondary</button>
          <button style={{backgroundColor:"#198754",color:"#ffffff", width:"100px",height:"50px",borderRadius:"8px",border:"none"}}>Success</button>
          <button style={{backgroundColor:"#ffc107",color:"#ffffff", width:"100px",height:"50px",borderRadius:"8px",border:"none"}}>Waring</button>
          <button style={{backgroundColor:"#dc3545",color:"#ffffff", width:"100px",height:"50px",borderRadius:"8px",border:"none"}}>Danger</button>
          <button style={{backgroundColor:"#0dcaf0",color:"#ffffff", width:"100px",height:"50px",borderRadius:"8px",border:"none"}}>Info</button>
          <button style={{backgroundColor:"#f8f9fa",color:"#090909ff", width:"100px",height:"50px",borderRadius:"8px",border:"none"}}>Light</button>
          <button style={{backgroundColor:"#212529",color:"#ffffff", width:"100px",height:"50px",borderRadius:"8px",border:"none"}}>Dark</button>
          <a href="http://">link</a>
        </div>
      </div>
    );
  }
}
