import {createStore , applyMiddleware} from "redux"
// import reducer from "./counter/counterReducer"
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

// let store = createStore(reducer);
let store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
