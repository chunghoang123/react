import React from "react";
import { CartItem } from "./CartItem";
import { TotalCost } from "./TotalCost";
import "../mainCss.css";

type StateType = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type CartMainProps = {
  items: StateType[];
  handleIncreaseInCart: (product: StateType) => void;
  handleDecreaseInCart: (product: StateType) => void;
  handleRemove: (product: StateType) => void;
};

export const CartMain = ({
  items,
  handleIncreaseInCart,
  handleDecreaseInCart,
  handleRemove,
}: CartMainProps) => {
  return (
    <div className="cart-main">
      <h2>Cart</h2>
      <div className="cart-list">
        {items.length === 0 ? (
          <p className="empty">Giỏ hàng trống</p>
        ) : (
          items.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              handleIncreaseInCart={handleIncreaseInCart}
              handleDecreaseInCart={handleDecreaseInCart}
              handleRemove={handleRemove}
            />
          ))
        )}
      </div>
      <TotalCost items={items} />
    </div>
  );
};
