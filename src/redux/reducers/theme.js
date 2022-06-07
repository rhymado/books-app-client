import { toggleThemeAction } from "../actionCreator/actionString";

const initialState = {
  background: "light",
};

const themeReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case toggleThemeAction:
      return {
        ...prevState,
        background: prevState.background === "light" ? "dark" : "light",
      };

    default:
      return prevState;
  }
};

export default themeReducer;
