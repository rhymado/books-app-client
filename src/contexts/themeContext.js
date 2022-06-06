import React from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#a8b8d8",
  },
  dark: {
    foreground: "#ffffff",
    background: "#282c34",
  },
};

export const themeContext = React.createContext(themes.light);

export const ThemeProvider = ({ children, value }) => {
  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
};
