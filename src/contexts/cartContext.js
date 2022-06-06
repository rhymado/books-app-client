import React from "react";

export const cartContext = React.createContext([]);

export const CartProvider = ({ children, value }) => {
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
