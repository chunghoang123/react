import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const {id} = useParams<{id:string}>()
      return (
    <div>
      <h1>Product</h1>
      <p>ID nhan dc tu URL :{id}</p>
    </div>
  )
}