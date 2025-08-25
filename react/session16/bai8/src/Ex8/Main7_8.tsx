import React, { useState } from "react";
import { Header7_8 } from "./Header7_8";
import "./mainCss.css";
import { ProductCard } from "./ProductCard";
// import { Product } from './product.data'
import { products as initialProducts } from "./product.data";
import { CartMain } from "./cart/CartMain";
type StateType = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};
export const Main7_8 = () => {
  const [products, setProduct] = useState(initialProducts);
  const [cartStatus, setCartStatus] = useState(false);
  //cart
  const [items, setItem] = useState<StateType[]>(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const openCart = () => {
    setCartStatus(!cartStatus);
  };
  const handleAdd = (product: StateType) => {
    const existingItem = items.find((i) => i.id === product.id);

    const itemInStorage = products.find((i) => i.id === product.id);

    if (itemInStorage) {
      let updatedItems;

      if (existingItem) {
        if (existingItem.quantity + 1 > itemInStorage.quantity) {
          alert("Khong du so luong");
          return;
        }
        updatedItems = items.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updatedItems = [...items, { ...product, quantity: 1 }];
      }

      setItem(updatedItems);
      localStorage.setItem("items", JSON.stringify(updatedItems));
    }
  };

  const handleIncreaseInCart = (product: StateType) => {
    const existingItem = items.find((i) => i.id === product.id);

    const itemInStorage = products.find((i) => i.id === product.id);

    if (itemInStorage) {
      let updatedItems;

      if (existingItem) {
        if (existingItem.quantity + 1 > itemInStorage.quantity) {
          alert("Khong du so luong");
          return;
        }
        updatedItems = items.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updatedItems = [...items, { ...product, quantity: 1 }];
      }
      setItem(updatedItems);
      localStorage.setItem("items", JSON.stringify(updatedItems));
    }
  };

  const handleDecreaseInCart = (product: StateType) => {
    const existingItem = items.find((i) => i.id === product.id);

    const itemInStorage = products.find((i) => i.id === product.id);

    if (itemInStorage) {
      let updatedItems;

      if (existingItem) {
        if (existingItem.quantity - 1 <= 0) {
          updatedItems = items.filter((i) => i.id !== product.id);
        } else {
          updatedItems = items.map((i) =>
            i.id === product.id ? { ...i, quantity: i.quantity - 1 } : i
          );
        }
      } else {
        updatedItems = [...items];
      }
      setItem(updatedItems);
      localStorage.setItem("items", JSON.stringify(updatedItems));
    }
  };

  const handleRemove = (product: StateType) => {
    const existingItem = items.find((i) => i.id === product.id);
    if (existingItem) {
      const updatedItems = items.filter((i) => i.id !== product.id);
      setItem(updatedItems);
      localStorage.setItem("items", JSON.stringify(updatedItems));
    }
  };

  return (
    <div className="container">
      <Header7_8 status={cartStatus} openCart={openCart} items={items} />
      <div className="productsContainer">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} handleAdd={handleAdd} />
        ))}
        {cartStatus ? (
          <CartMain
            items={items}
            handleDecreaseInCart={handleDecreaseInCart}
            handleIncreaseInCart={handleIncreaseInCart}
            handleRemove={handleRemove}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
