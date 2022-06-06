import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import PrivateElement from "./components/PrivateElement";

function App() {
  return (
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
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
