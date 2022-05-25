import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Home.css";

import Header from "../../components/Header";
// import withParams from "../../helper/withParams";
import withSearchParams from "../../helper/withSearchParams";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      bookName: "",
      isFetching: false,
      theme: "dark",
    };
  }
  sayHello = (word) => {
    console.log(word);
  };
  componentDidUpdate = () => {
    // console.log("cdu");
  };
  async componentDidMount() {
    // console.log("cdm");
    // fetch("http://localhost:8080/book/all?page=2&limit=3")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.error(err));
    try {
      const result = await axios.get(
        "http://localhost:8080/book/all?page=2&limit=4"
      );
      this.setState({
        books: result.data.list,
      });
    } catch (error) {
      console.error(error);
    }
  }
  componentWillUnmount() {}
  render() {
    // console.log("name", this.props.searchParams.get("name"));
    // console.log("location", this.props.searchParams.get("location"));
    // baris code
    return (
      // akan mereturnkan element html
      // class => className
      // ternary operator => shorthand dari if else
      // kondisi ? logika true : logika false
      <div
        className={`App App-header ${
          this.state.theme === "dark" ? "dark" : "light"
        }`}
      >
        <Header bookName={this.state.bookName} greeting={this.sayHello} />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const title = e.target["book-title"].value;
            this.setState({
              bookName: title,
            });
          }}
        >
          <input type="text" name="book-title" />
          <button type="submit">Change</button>
        </form>
        <button
          onClick={() => {
            let newTheme = "dark";
            if (this.state.theme === "dark") {
              newTheme = "light";
            }
            this.setState({
              theme: newTheme,
            });
          }}
        >
          Toggle Theme
        </button>
        <button onClick={() => this.forceUpdate()}>Force Update</button>
        <Link to="/auth">
          <button>Register Here</button>
        </Link>
        <section>
          <ul>
            {Array.isArray(this.state.books) ? (
              this.state.books.map((book) => (
                <li key={book.id}>{book.title}</li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </section>
      </div>
    );
  }
}

export default withSearchParams(Home);
