import React from 'react'
import { Outlet } from 'react-router-dom'

export default function UseLayout() {
  return (
    <div>
        {/* hien thi ra noi dung cua cac trang con */}
        <Outlet/>
      
    </div>
  )
}
