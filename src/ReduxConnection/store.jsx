import { createStore, combineReducers } from "redux";
import {
  fetchDataReducer,
  userDataReducer,
} from "../ReduxConnection/reducer.jsx";
import { reducer } from "../ReduxConnection/reducer.jsx";

const store = createStore(
  combineReducers({
    user: userDataReducer,
    userdata: fetchDataReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
