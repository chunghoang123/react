import React from 'react'
import { useParams } from 'react-router-dom'

export default function Student() {
    const {name} = useParams<{name :string}>();
  return (
    <div>
        <h1>Student</h1>
        <p>Ten SV la: {name}</p>
      
    </div>
  )
}
