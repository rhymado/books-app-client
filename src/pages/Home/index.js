import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Home.css";

import Header from "../../components/Header";
// import withParams from "../../helper/withParams";
import withSearchParams from "../../helper/withSearchParams";

import { themeContext } from "../../contexts/themeContext";
import { getAllBooks } from "../../utils/books";
import { getBooks } from "../../redux/actionCreator/books";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      bookName: "",
      isFetching: false,
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
      const result = await getAllBooks();
      // this.props.dispatch(getBooks());
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
    // console.log("Context", this.context.theme, themes[this.context.theme]);
    // baris code
    return (
      // akan mereturnkan element html
      // class => className
      // ternary operator => shorthand dari if else
      // kondisi ? logika true : logika false
      <div
        className={`App App-header ${this.context.theme}`}
        // style={themes[this.context.theme]}
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
          onClick={
            //   () => {
            //   let newTheme = "dark";
            //   if (this.state.theme === "dark") {
            //     newTheme = "light";
            //   }
            //   this.setState({
            //     theme: newTheme,
            //   });
            // }
            this.context.onChangeTheme
          }
        >
          Toggle Theme
        </button>
        <button onClick={() => this.forceUpdate()}>Force Update</button>
        <Link to="/auth">
          <button>Register Here {this.props.number}</button>
        </Link>
        <button onClick={() => this.props.dispatch(getBooks())}>
          GET books
        </button>
        <section>
          <ul>
            {Array.isArray(this.state.books) ? (
              this.state.books.map((book) => (
                <li style={{ textAlign: "left" }} key={book.id}>
                  {book.title}
                </li>
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
Home.contextType = themeContext;

const mapStateToProps = (reduxState) => {
  const {
    counter: { number },
  } = reduxState;
  return {
    number,
  };
};

export default connect(mapStateToProps)(withSearchParams(Home));
