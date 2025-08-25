import React from 'react'
import "./mainCss.css"
type StateType={
  status: boolean
  openCart: () => void
  items: ItemType[]
}
type ItemType = {
    id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}
export const Header7_8 = (prop:StateType) => {
  return (
    <header>
        <div>Trang chu</div>
        <div className='headerNav'>
            <span>Danh sach san pham</span>
            <div className='cart'>
          <span role='img'className='cartIcon' style={{fontSize:"20px"}} onClick={prop.openCart}>🛒</span>
          <span className='ping'>{prop.items.reduce((sum,curr)=> sum+curr.quantity, 0)}</span>
        </div>
        </div>
    </header>
  )
}
