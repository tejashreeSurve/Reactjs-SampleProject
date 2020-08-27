import { createStore, combineReducers } from "redux";
import ReduxReducer from "./ReduxReducer.jsx";

const store = createStore(
  ReduxReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
