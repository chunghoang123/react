import { Header } from 'antd/es/layout/layout'
import React from 'react'
import FromProduct from './FromProduct'
import ListProduct from './ListProduct'
import PatinationProduct from './PatinationProduct'

export default function ProductManager() {
  return (
    <div className='flex item-'>
      <Header/>
      <FromProduct/>
      <ListProduct/>
      <PatinationProduct/>
    </div>
  )
}
