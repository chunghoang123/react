import React from 'react'

type PropTypes = {
    name:string;
    email:string;
}

export default function DemofuntionComponent({email,name = "nguễn vân  a"}:PropTypes) {
  return (
    <div>
        <h1>{email}</h1>
        <h1>{name}</h1>

      
    </div>
  )
}
