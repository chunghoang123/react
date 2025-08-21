import React, { Component } from "react";
import ChildrenProduct from "./ChildrenProduct";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface State {
  product: Product;
}

export default class ParentProduct extends Component<object, State> {
  constructor(props: object) {
    super(props);

    // Khởi tạo state với đối tượng product
    this.state = {
      product: {
        id: 101,
        name: "Laptop Dell XPS 13",
        price: 28000000,
        quantity: 5,
      },
    };
  }

  render() {
    return (
      <div>
        <ChildrenProduct product={this.state.product} />
      </div>
    );
  }
}
