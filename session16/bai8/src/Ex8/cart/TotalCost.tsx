import React from 'react'
type StateType= {
     id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}
export const TotalCost = ({items}: StateType) => {
  return (
    <div>Tong gia don hang: {items.reduce((sum,curr)=>sum+ (curr.price * curr.quantity),0).toLocaleString("vi-VN")} VND</div>
  )
}
