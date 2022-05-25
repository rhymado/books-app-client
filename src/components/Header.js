import React from "react";

function Header({ bookName, greeting }) {
  // console.log("bookName", bookName);
  let title = bookName;
  if (title === "") {
    title = "Please Insert Title Below";
  }
  return (
    <header>
      <h1>{title.toUpperCase()}</h1>
      <button
        onClick={() => {
          if (typeof greeting === "function") {
            greeting("Selamat Datang");
          }
        }}
      >
        Greet
      </button>
    </header>
  );
}

// module.exports = Header
export default Header;
