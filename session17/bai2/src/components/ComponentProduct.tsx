
import React from "react";
type Quantity = {
  id: number;
  name: string;
  price: string;
  quantity: number;
};

export default function ComponentProduct({
  id = 1,
  name = "Coca cola",
  price = " 1000$",
  quantity = 10,
}: Quantity) {
  return (
    <div>
      <h1>Thông tin sản phẩm</h1>
      <h3>ID:{id} </h3>
      <h3>Name: {name}</h3> 
      <h3>Price:{price}</h3> 
      <h3>Quantity: {quantity}</h3>
    </div>
  );
}
