import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

import Google from "../../assets/img/google.png";
import Facebook from "../../assets/img/facebook.png";
import Twitter from "../../assets/img/twitter.png";
import BackArrow from "../../assets/img/back-arrow.png";

import { themeContext, themes } from "../../contexts/themeContext";

import "./Auth.css";

class Auth extends Component {
  state = {
    email: "",
    pass: "",
    phone: "",
    isPasswordShown: false,
    isError: false,
    errorMsg: "",
    isShow: false,
    isLoading: false,
  };
  componentDidMount() {
    const { state = null } = this.props.location;
    if (state !== null && !state.isAuthenticated) {
      this.setState({
        isShow: true,
      });
    }
  }
  registerUser = () => {
    setTimeout(() => {
      const { email, pass, phone } = this.state;
      const body = {
        email,
        pass,
        phone,
      };
      axios
        .post("http://localhost:8080/auth/new", body)
        .then((result) => {
          console.log(result.data);
          localStorage.setItem(
            "userinfo-book",
            JSON.stringify(result.data.list)
          );
          this.setState({
            isError: false,
            errorMsg: "",
            isLoading: false,
          });
        })
        .catch((error) => {
          this.setState({
            isError: true,
            errorMsg: error.response.data.err.msg,
            isLoading: false,
          });
        });
    }, 1000);
  };
  render() {
    return (
      <div className="container-auth">
        <aside className="side-content">
          <header
            className="side-header clickable"
            onClick={() => {
              this.props.navigate("/");
            }}
          >
            <img src={BackArrow} alt="back-arrow" className="back-arrow" />
            <p className="side-header-title">Home Page</p>
          </header>
          <section className="side-title">
            <p className="title">
              News
              <br />
              Today
            </p>
            <p className="email">newstoday@mail.com</p>
          </section>
          <section className="side-login">
            <section className="has-account">
              <div className="underline"></div>
              <p className="has-account-text">Already have an account?</p>
              <div className="underline"></div>
            </section>
            <div className="login-button">Login Here</div>
          </section>
          <section className="side-info">
            <p className="info-text">Why News Today</p>
            <p className="info-text">Be an Author</p>
            <p className="info-text">Community</p>
            <p className="info-text">FAQ</p>
          </section>
        </aside>
        <main className="main-content" style={themes[this.context.theme]}>
          <header className="main-header">
            <p className="main-header-title">Sign Up</p>
            <p className="main-header-info">
              Hey, welcome to News Today! Create an account to enjoy our full
              features!
            </p>
          </header>
          <form className="register-form">
            <section className="email-input">
              <label htmlFor="email">Email Address :</label>
              <input
                type="text"
                className="auth-input-text"
                id="email"
                placeholder="Enter your email address"
                onChange={(e) => {
                  this.setState({
                    email: e.target.value,
                  });
                }}
              />
            </section>

            <label htmlFor="password">Password :</label>
            <input
              type={`${this.state.isPasswordShown ? "text" : "password"}`}
              className="auth-input-password"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => {
                this.setState({
                  pass: e.target.value,
                });
              }}
            />
            <label>
              <input
                type="checkbox"
                value={this.state.isPasswordShown}
                onChange={() => {
                  this.setState({
                    isPasswordShown: !this.state.isPasswordShown,
                  });
                }}
              />
              Show Password
            </label>

            <label htmlFor="phone">Phone Number :</label>
            <input
              type="text"
              className="auth-input-text"
              id="phone"
              placeholder="Enter your phone number"
              onChange={(e) => {
                this.setState({
                  phone: e.target.value,
                });
              }}
            />

            {this.state.isError ? <p>{this.state.errorMsg}</p> : <></>}
            <div
              className="register-submit"
              onClick={() => {
                if (!this.state.isLoading)
                  this.setState(
                    {
                      isLoading: true,
                    },
                    this.registerUser
                  );
              }}
            >
              {this.state.isLoading ? (
                <div className="loader"></div>
              ) : (
                "Sign Up"
              )}
            </div>
          </form>
          <section className="other-signup-method">
            <p className="signup-method">OR SIGN UP WITH</p>
            <section className="signup-method-icon">
              <img src={Google} alt="google" className="google" />
              <img src={Facebook} alt="facebook" className="facebook" />
              <img src={Twitter} alt="twitter" className="twitter" />
            </section>
          </section>
        </main>
        <Modal
          show={this.state.isShow}
          onHide={() => {
            this.setState({ isShow: false }, () =>
              this.props.navigate("/auth", { replace: true, state: null })
            );
          }}
        >
          <Modal.Title>Warning</Modal.Title>
          <Modal.Body>Silahkan Login Terlebih Dahulu</Modal.Body>
        </Modal>
      </div>
    );
  }
}
Auth.contextType = themeContext;

const withLocationAndNavigate = (Component) => {
  const WithLocationAndNavigate = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return <Component location={location} navigate={navigate} />;
  };
  return WithLocationAndNavigate;
};

export default withLocationAndNavigate(Auth);
