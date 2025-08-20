import React from "react";

// Định nghĩa kiểu dữ liệu cho props
interface Props {
  product: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
}

const ChildrenProduct: React.FC<Props> = ({ product }) => {
  return (
    <div>
      <h3>Dự liệu trong component con</h3>
      <h3>id: {product.id}</h3>
      <h3>ProductName: {product.name}</h3>
      <h3>price: {product.price}</h3>
      <h3>Quantity: {product.quantity}</h3>

    </div>
  );
};

export default ChildrenProduct;
