import React, { useMemo } from "react";

export default function ShoppingCart() {
  const cartItems = [
    {
      id: 1,
      name: "iphone 15",
      price: 1800000,
      quantity: 1,
    },
    {
      id: 2,
      name: "iphone 16",
      price: 2100000,
      quantity: 1,
    },
    {
      id: 3,
      name: "iphone 17",
      price: 300000,
      quantity: 1,
    },
  ];

  const total = useMemo(() => {
    console.log("đang tính tổng");
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);
  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>🛒 Giỏ hàng của bạn</h2>

      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price.toLocaleString()}₫ × {item.quantity}
            
          </li>
        ))}
      </ul>


      <h3>
        Tổng đơn hàng:{" "}
        <span style={{ color: "red" }}>{total.toLocaleString()}₫</span>
      </h3>
    </div>
  );
}
