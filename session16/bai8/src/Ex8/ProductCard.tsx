import React, { useState } from "react";
import "./mainCss.css";
import { products } from "./product.data";
type StateType = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  handleAdd: (prop:StateType) =>void,
};
export const ProductCard = (prop: StateType) => {
  const [items, setItem] = useState<StateType[]>(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

 
  return (
    <div
      style={{
        borderRadius: "8px",
        border: "1px solid rgb(237, 235, 235)",
        boxShadow: "0 2px 8px rgb(0,0,0,0.3)",
        padding: "5%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}>
      <img
        src={prop.image}
        alt=""
        style={{ width: "200px", height: "200px" }}
      />
      <span>
        <strong>{prop.name}</strong>
      </span>
      <span>{prop.price.toLocaleString("vi-VN")} VND</span>
      <button
        onClick={() => prop.handleAdd(prop)}
        className="addBtn"
        style={{
          color: "white",
          backgroundColor: "rgb(40, 98, 236)",
          width: "150px",
          minHeight: "30px",
          padding: "2.5%",
          border: "none",
          borderRadius: "3px",
        }}>
        Them vao gio hang
      </button>
    </div>
  );
};
