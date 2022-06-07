import { combineReducers } from "redux";

import counterReducer from "./counter";
import themeReducer from "./theme";

const reducers = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

export default reducers;
