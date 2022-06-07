import { combineReducers } from "redux";

import counterReducer from "./counter";
import themeReducer from "./theme";
import bookReducer from "./books";

const reducers = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  book: bookReducer,
});

export default reducers;
