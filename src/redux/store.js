import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rpm from "redux-promise-middleware";
// import { persistStore } from "redux-persist";

import reducers from "./reducers";

const logger = createLogger();
const middlewares = applyMiddleware(rpm, logger);
const store = createStore(reducers, middlewares);

export default store;
