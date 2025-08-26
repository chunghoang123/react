import React from 'react'
type Name = {
    name:string;
}

export default function ComponentName({name = "nguyễn văn a"}:Name) {
  return (
    <div>
        <h1>Họ và tên: {name}</h1>
      
    </div>
  )
}
