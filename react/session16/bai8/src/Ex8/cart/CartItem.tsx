import React from 'react';
import '../mainCss.css';

type StateType = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  handleIncreaseInCart : (prop:StateType) =>void,
  handleDecreaseInCart: (prop:StateType) =>void,
  handleRemove: (prop:StateType) =>void
};

export const CartItem = (prop: StateType) => {
  return (
    <div className="cart-item">
      <img src={prop.image} alt={prop.name} />

      <div className="cart-item-info">
        <h3>{prop.name}</h3>
        <span>{prop.price.toLocaleString()}₫</span>
      </div>

      <div className="cart-item-actions">
        <button className="cart-btn"  onClick={()=>prop.handleIncreaseInCart(prop)} >+</button>
        <span className="cart-quantity">{prop.quantity}</span>
        <button className="cart-btn"   onClick={()=>prop.handleDecreaseInCart(prop)}  >-</button>
        <button className="cart-remove"  onClick={()=> prop.handleRemove(prop)} >
          <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="delete" />
        </button>
      </div>
    </div>
  );
};
