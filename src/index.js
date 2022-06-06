// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import PrivateElement from "./components/PrivateElement";

import { ThemeProvider } from "./contexts/themeContext";
import { CartProvider } from "./contexts/cartContext";

function App() {
  const [theme, setTheme] = React.useState("light");
  const [cart, setCart] = React.useState([]);
  const onChangeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const onAddToCart = (book) => {
    const newCart = [...cart];
    newCart.push(book);
    setCart(newCart);
  };
  const onDeleteCart = (id) => {
    const newCart = cart.filter((book) => book.id !== id);
    setCart(newCart);
  };
  return (
    <CartProvider value={{ cart, onAddToCart, onDeleteCart }}>
      <ThemeProvider value={{ theme, onChangeTheme }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route
              path="/profile/:id"
              element={
                <PrivateElement
                  redirectedTo="/auth"
                  extraData={{ isAuthenticated: false }}
                >
                  <Profile />
                </PrivateElement>
              }
            />
            <Route path="/product" element={<Product />} />
            {/* <Route path="/profile/:id" element={<Profile />} /> */}
            <Route
              path="*"
              element={
                <main className="d-flex justify-content-center align-items-center p-4 fw-bold">
                  <Button variant="success" className="big">
                    <p>There's nothing here!</p>
                  </Button>
                </main>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </CartProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
