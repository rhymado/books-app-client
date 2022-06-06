import React, { Component } from "react";
import axios from "axios";

import { cartContext } from "../../contexts/cartContext";

class ListBook extends Component {
  state = {
    books: [],
  };
  async componentDidMount() {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_HOST}/book/all?page=2&limit=4`
      );
      this.setState({
        books: result.data.list,
      });
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return (
      <section className="list-wrapper">
        List Book
        <section className="book-wrapper clickable">
          {this.state.books.length > 0 &&
            this.state.books.map((book, idx) => (
              <div
                className="card-book"
                key={idx}
                onClick={() => {
                  // this.props.onAddToCart(book);
                  this.context.onAddToCart(book);
                }}
              >
                <p className="book-title">{book.title}</p>
                <p className="author">{book.author}</p>
                <p className="genre">{book.genre}</p>
              </div>
            ))}
        </section>
      </section>
    );
  }
}
ListBook.contextType = cartContext;

export default ListBook;
