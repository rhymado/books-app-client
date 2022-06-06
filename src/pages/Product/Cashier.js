import React from "react";

import { cartContext } from "../../contexts/cartContext";

const Cashier = ({ cart, onDeleteCart }) => {
  const { cart: cartList, onDeleteCart: onRemoveCart } =
    React.useContext(cartContext);
  // console.log(cartCon);
  return (
    <section className="cashier-wrapper">
      Cashier
      {cartList.length > 0 &&
        cartList.map((book) => (
          <div className="card-book" key={book.id}>
            <p className="book-title">{book.title}</p>
            <p className="author">{book.author}</p>
            <p className="genre">{book.genre}</p>
            <p
              className="remove clickable"
              onClick={() =>
                // onDeleteCart(book.id)
                onRemoveCart(book.id)
              }
            >
              remove
            </p>
          </div>
        ))}
    </section>
  );
};

export default Cashier;
