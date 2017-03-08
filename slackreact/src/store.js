import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/reducers";

/* Middleware Imports */
// Logging
import logger from "redux-logger";
// Async actions
import thunk from "redux-thunk";

// Create store starting with empty state object
export default createStore(reducers, {}, applyMiddleware(thunk, logger()));


