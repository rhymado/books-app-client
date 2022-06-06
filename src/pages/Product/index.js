import "./product.css";
import React, { Component } from "react";

import Cashier from "./Cashier";
import ListBook from "./ListBook";

class Product extends Component {
  state = {
    cart: [],
  };
  onAddToCart = (book) => {
    const newCart = [...this.state.cart];
    newCart.push(book);
    this.setState({
      cart: newCart,
    });
  };
  onDeleteCart = (id) => {
    const newCart = this.state.cart.filter((book) => book.id !== id);
    this.setState({
      cart: newCart,
    });
  };
  render() {
    return (
      <main className="product-wrapper">
        <ListBook onAddToCart={this.onAddToCart} />
        <Cashier cart={this.state.cart} onDeleteCart={this.onDeleteCart} />
      </main>
    );
  }
}

export default Product;
